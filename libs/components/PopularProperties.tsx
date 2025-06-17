

import { GET_PRODUCTS } from "../../apollo/user/query";
import { useMutation, useQuery } from "@apollo/client";
import { Box,  Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { T } from "../types/config";
import ProductCard from "./property/ProductCard";
import { ProductsInquiry } from "../types/property/property.input";
import { Product } from "../types/property/property";
import { LIKE_TARGET_PRODUCT } from "apollo/user/mutation";
import { Message } from "libs/enums/common.enum";
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from "libs/sweetAlert";
import PopularProductCard from "./property/PopularProductCard";

interface PopularPropertiesProps {
  initialInput: ProductsInquiry;
  likeProductHandler?: any;
}

const PopularProperties = (props: PopularPropertiesProps) => {
    const [popularProducts, setPopularProducts] = useState<Product[]>([]);
    const {initialInput} = props;
    const {
      loading: getProductsLoading,
      data: getProductsData,
      error: getProductsError,
      refetch: getProductsRefetch,
    } = useQuery(GET_PRODUCTS, {
      fetchPolicy: "network-only",
      variables: {
        input: initialInput
      },
      notifyOnNetworkStatusChange: true,
      onCompleted(data: T) {
        setPopularProducts(data?.getProducts?.list || [])
      },
    });


    const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT)

    
    const likeProductHandler = async (user: T, id: string) => {
      try {
          if(!id) return
          if(!user._id) throw new Error(Message.NOT_AUTHENTICATED);

          await likeTargetProduct({variables: {productId: id}})
          await getProductsRefetch({input: initialInput})
          await sweetTopSmallSuccessAlert("success", 800)
      } catch (err: any) {
          console.log("Error, likeProperty ", err.message);
          sweetMixinErrorAlert(err.message).then()
      }
  }


    
    
    
  
    return (
      <Stack className="newest-products">
        <Stack className="container">
          <Stack className="info-box">
            <Box className="left">
              <span>Newest Products</span>
              <p>One of the advantages of visiting a physical furniture store</p>
            </Box>
          </Stack>
          <Stack className="card-box">
            <Swiper
              className="popular-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination", 
              }}
            >
              {
                popularProducts?.map((product: Product) => {
                    return (
                        <SwiperSlide key={product._id} className="popular-property-slide">
                  <PopularProductCard product={product}/>
                </SwiperSlide>
                    )
                })
              }
            </Swiper>
          </Stack>
        </Stack>
      </Stack>
    );
  };
  
  PopularProperties.defaultProps = {
    initialInput: {
      page: 1,
      limit: 7,
      sort: 'productViews',
      direction: 'DESC',
      search: {},
    },
  };


export default PopularProperties;