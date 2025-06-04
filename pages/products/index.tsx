import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import Filter from "../../libs/components/property/Filter";
import ProductCard from "../../libs/components/property/ProductCard";
import useDeviceDetect from "../../libs/hooks/useDeviceDetect";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "apollo/user/query";
import { T } from "libs/types/config";
import { Product } from "libs/types/property/property";
import { ProductsInquiry } from "libs/types/property/property.input";
import { LIKE_TARGET_PRODUCT } from "apollo/user/mutation";
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from "libs/sweetAlert";
import { Message } from "libs/enums/common.enum";



const Property:NextPage = ({initialInput}: any) => {
   const device = useDeviceDetect()
   const router = useRouter()
   const [searchFilter, setSearchFilter] = useState<ProductsInquiry>(
		router?.query?.input ? JSON.parse(router?.query?.input as string) : initialInput,
	);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [products, setProducts] = useState<Product[]>([])
   const [total, setTotal] = useState<number>(0)


   const {
      loading: getProductsLoading,
      data: getProductsData,
      error: getProductsError,
      refetch: getProductsRefetch,
    } = useQuery(GET_PRODUCTS, {
      fetchPolicy: "network-only",
      variables: {
        input: searchFilter
      },
      notifyOnNetworkStatusChange: true,
      onCompleted(data: T) {
        setProducts(data?.getProducts?.list || [])
        setTotal(data?.getProducts?.metaCounter?.[0]?.total)
      },
    });

    const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT)

    //LifeCycles
    useEffect(() => {
		if (router.query.input) {
			const inputObj = JSON.parse(router?.query?.input as string);
			setSearchFilter(inputObj);
		}

		setCurrentPage(searchFilter.page === undefined ? 1 : searchFilter.page);
	}, [router]);

	useEffect(() => {
		console.log('searchFilter', searchFilter);
		getProductsRefetch({ input: searchFilter }).then();
	}, [searchFilter]);


   //HANDLERS

   const likeProductHandler = async (user: T, id: string) => {
      try {
          if(!id) return
          if(!user._id) throw new Error(Message.NOT_AUTHENTICATED);

          await likeTargetProduct({variables: {productId: id}})
          await getProductsRefetch({input: initialInput})
          const freshData = await getProductsRefetch({ input: initialInput });
            setProducts(freshData?.data?.getProducts?.list || []);
          await sweetTopSmallSuccessAlert("success", 800)
      } catch (err: any) {
          console.log("Error, likeProperty ", err.message);
          sweetMixinErrorAlert(err.message).then()
      }
  }

   const handlePaginationChange = async (event: ChangeEvent<unknown>, value: number) => {
		searchFilter.page = value;
		await router.push(
			`/products?input=${JSON.stringify(searchFilter)}`,
			`/products?input=${JSON.stringify(searchFilter)}`,
			{
				scroll: false,
			},
		);
		setCurrentPage(value);
	};
   
   if(device === "mobile") {
      return <Stack>PROPERTYLIST PAGE</Stack>
   } else {
      return (
         <div id="property-list-page" style={{position: "relative"}}>
            <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/"}>Home / </Link>
              </Box>
              <div className="detail-title">Products</div>
          </Stack>
            <Stack className="container">
               <Box className="right" sx={{paddingBottom: 20}}>
                  <Stack className="total-result">
                     <Typography>Showing  available {total} product{total > 1 ? 's' : " 0"} </Typography>
                  </Stack>
                  <span>Sort by</span>
                  <div>
                     <Button endIcon={<KeyboardArrowDown/>}>New</Button>
                  </div>
               </Box>
               <Stack className="property-page">
                     <Stack className="filter-config">
                        <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} initialInput={initialInput}/>
                     </Stack>
                     <Stack className="main-config" mb={"76px"}>
                     <Stack className="list-config">
                           {products.length === 0 ? (
                              <div className={'no-data'}>
                              <img src="/img/icons/icoAlert.svg" alt="" />
                              <p>No Products found!</p>
                           </div>
                           ) : (
                              products.map((product) => {
                                 return <ProductCard product={product} key={product?._id} likeProductHandler={likeProductHandler}/>
                              })
                           )}
                        </Stack>
                        <Stack className="pagination-config">
                           <Stack className="pagination-box">
                              <Pagination 
                                 page={currentPage}
                                 count={Math.ceil(total / searchFilter.limit)}
                                 onChange={handlePaginationChange}
                                 shape="circular" 
                                 color="primary" 
                              />
                           </Stack>
                        </Stack>
   
                     </Stack>
               </Stack>
            </Stack>
         </div>
       )
   }
 }

 Property.defaultProps = {
   initialInput: {
		page: 1,
		limit: 8,
		sort: 'createdAt',
		direction: 'DESC',
		search: {
			pricesRange: {
				start: 0,
				end: 2000000,
			}
		},
   }
 }
 
 export default withLayoutBasic(Property);