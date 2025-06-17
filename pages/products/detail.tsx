import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import useDeviceDetect from "../../libs/hooks/useDeviceDetect";
import { Box, Button, Container, Divider, FormControl, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Stack, Tab, Tabs } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from "next/link";
import { SyntheticEvent, useEffect, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import AdditionalInfo from "../../libs/components/property/AdditionalTab";
import Reviews from "../../libs/components/common/Reviews";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { T } from "libs/types/config";
import { Product} from "libs/types/property/property";
import { GET_COMMENTS, GET_PRODUCT, GET_PRODUCTS } from "apollo/user/query";
import {useRouter } from "next/router";
import { Direction, REACT_APP_API_URL } from "libs/config";
import CommentsInquiry, { CommentInput } from "libs/types/comments/comment.input";
import { Comment } from "libs/types/comments/comment";
import { CREATE_COMMENT } from "apollo/user/mutation";
import { CommentGroup } from "libs/enums/comment.enum";
import { Message } from "libs/enums/common.enum";
import { sweetErrorHandling } from "libs/sweetAlert";
import { userVar } from "apollo/store";
import ProductCard from "libs/components/property/ProductCard";
import PopularProductCard from "libs/components/property/PopularProductCard";




const PropertyDetail = ({initialComment, ...props}: any) => {
  const device = useDeviceDetect();
  const router = useRouter();
  const user = useReactiveVar(userVar);
  const [slideImage, setSlideImage] = useState<string>("/img/property/bigImage.png");
  const [value, setValue] = useState<number | null>(2);
  const [size, setSize] =useState<string>('');
  const [color, setColor] =useState<string>('');
  const [tab, setTab] = useState<string>("1")
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [commentInquiry, setCommentInquiry] = useState<CommentsInquiry>(initialComment);
  const [productComment, setProductComments] = useState<Comment[]>([])
  const [commentTotal, setCommentTotal] = useState<number>(0);
  const [insertCommentData, setInsertCommentData] = useState<CommentInput>({
		commentGroup: CommentGroup.PRODUCT,
		commentContent: '',
		commentRefId: '',
	});





  const {
    loading: getProductLoading,
    data: getProductData,
    error: getProductError,
    refetch: getProductRefetch,
  } = useQuery(GET_PRODUCT, {
    fetchPolicy: "cache-and-network",
    variables: { productId: productId},
    skip: !productId,
    notifyOnNetworkStatusChange: true,
    onCompleted(data: T) {
     if(data?.getProduct) setProduct(data.getProduct)
     if(data?.getProduct) setSlideImage(data.getProduct?.productImages[0])
    },
  });

  const {
    loading: getCommentsLoading,
    data: getCommentsData,
    error: getCommentsError,
    refetch: getCommentsRefetch,
    } = useQuery(GET_COMMENTS, {
    fetchPolicy: 'cache-and-network',
    variables: { input: initialComment },
    skip: !commentInquiry.search.commentRefId,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      if (data?.getComments?.list) setProductComments(data?.getComments?.list);
      setCommentTotal(data?.getComments?.metaCounter[0]?.total ?? 0)
    },
    });

    
    const {
      loading: getProductsLoading,
      data: getProductsData,
      error: getProductsError,
      refetch: getProductsRefetch,
    } = useQuery(GET_PRODUCTS, {
      fetchPolicy: "network-only",
      variables: {
        input: {
          page: 1,
          limit: 5,
          sort: "createdAt",
          direction: "DESC",
          search: {
            productType: [product?.productType]
          }
        }
      },
      skip: !productId && !product,
      notifyOnNetworkStatusChange: true,
      onCompleted(data: T) {
       if(data?.getProducts?.list) setRelatedProducts(data?.getProducts?.list || [])
      },
    });


    //LifeCycles 
useEffect(() => {
  if (router.query.id) {
    setProductId(router.query.id as string);
    setCommentInquiry({
      ...commentInquiry,
      search: {
        commentRefId: router.query.id as string,
      },
    });
    setInsertCommentData({
      ...insertCommentData,
      commentRefId: router.query.id as string,
    });
  }
}, [router]);


useEffect(() => {
  if(commentInquiry.search.commentRefId) {
    getCommentsRefetch({input: commentInquiry})
  }
}, [commentInquiry]);
    

    //Handlers

  const changeImageHandler = (image: string) => {
    setSlideImage(image);
  };

  const sizeHandler = (event: SelectChangeEvent) => {
    setSize(event.target.value)
  }
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setTab(newValue)
}
const colorHandler = (event: SelectChangeEvent) => {
  setColor(event.target.value)
}

const refetchComment = (variables: {input: CommentsInquiry}) => {
  return getCommentsRefetch(variables);
};


  if (device === "mobile") {
    return <Stack>PROPERTYLIST PAGE</Stack>;
  } else {
    return ( 
      <Stack className="product-detail">
          <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/products"}>Product / </Link>
              </Box>
              <div className="detail-title">Detail</div>
          </Stack>
          <Stack className="container">
            <Stack className={"images"}>
              <Stack className={"main-image"}>
                <img src={slideImage ? `${REACT_APP_API_URL}/${slideImage}` : '/img/property/bigImage.png'} alt="main-image" />
              </Stack>
              <Stack className={"sub-images"}>
              {product?.productImages.map((subImg: string) => {
                  const imagePath: string = `${REACT_APP_API_URL}/${subImg}`;
                  return (
                    <Stack
                      className={"sub-img-box"}
                      onClick={() => changeImageHandler(subImg)}
                      key={subImg}
                    >
                      <img src={imagePath} alt="sub-image" />
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
            <Divider className="divider1"/>
            <Stack className={"detail"}>
              <Box className={"info-box"}>
                <span className="name">{product?.productName}</span>
                <h1>{product?.productName}</h1>
                <Box className={"stars"} sx={{ '& > legend': { mt: 2 } }}>
                  <Rating
                  name="simple-controlled"
                  sx={{color:"orange"}}
                  value={value}
                  onChange={(event, newValue) => {
                  setValue(newValue);
                  }}
              /></Box>
              <p className={"price"}>${product?.productPrice}</p>
              <Box className={"desc"}>
                <p>{product?.productDesc}</p>
              </Box>
              </Box>
              <Divider/>
              <Box className={"option"}>
                <p className="size">size</p>
                <FormControl  className={"form-control"} size="small" sx={{ "& .MuiOutlinedInput-notchedOutline": { border: " 1px solid black" } }}>
                <Select
                  labelId="demo-select-small-label"
                  className="selector"
                  value={size}
                  onChange={sizeHandler}
                  sx={{
                    "&.MuiOutlinedInput-root": {
                      "& fieldset": { border: "1px solid black" },
                      "&:hover fieldset": { border: "1px solid black" },
                      "&.Mui-focused fieldset": { border: "1px solid black" } 
                    }
                  }}
              
                >
                  <MenuItem value="Choose an size">
                    <em>choose a size</em>
                  </MenuItem>
                  <MenuItem className="menuItem" value={"Large"}>Large</MenuItem>
                  <MenuItem className="menuItem" value={"Medium"}>Medium</MenuItem>
                  <MenuItem className="menuItem" value={"Small"}>Small</MenuItem>
                </Select>
                </FormControl>
              </Box>
              <Box className={"option-sec"}>
                <p className="color">color</p>
                <FormControl  className={"form-control"} size="small" sx={{ "& .MuiOutlinedInput-notchedOutline": { border: " 1px solid black" } }}>
                <Select
                  labelId="demo-select-small-label"
                  className="selector"
                  value={color}
                  onChange={colorHandler}
                  sx={{
                    "&.MuiOutlinedInput-root": {
                      "& fieldset": { border: "1px solid black" },
                      "&:hover fieldset": { border: "1px solid black" },
                      "&.Mui-focused fieldset": { border: "1px solid black" } 
                    }
                  }}
              
                >
                  <MenuItem className="menuItem" value={"Red"}>Red  <div className="color"></div></MenuItem>
                  <MenuItem className="menuItem" value={"Yellow"}>Yellow</MenuItem>
                  <MenuItem className="menuItem" value={"Black"}>Black</MenuItem>
                  <MenuItem className="menuItem" value={"Brown"}>Brown</MenuItem>
                </Select>
                </FormControl>
                <Stack className="btn-box">
                  <Box className={"counter"}>
                    <button >-</button>
                    <p>2</p>
                    <button>+</button>  
                  </Box> 
                    <Button className="add-btn">Add to cart<AddShoppingCartIcon className="basket"/></Button> 
                  <Box className="icon-like">
                    <FavoriteBorderIcon className="like"/>
                  </Box>
                </Stack>
              </Box>
              <Divider/>
              <Box className={"shipping-box"}>
                <p><LocalShippingIcon className="shipping"/>Free shipping on orders over $50!</p>
                <div className="info">
                <GppGoodIcon className="secure"/>
                <span> Satisfaction Guaranteed</span>
                </div>
                <div className="info">
                <GppGoodIcon className="secure"/>
                <span>No Hassle Refunds</span>
                </div>
                <div className="info">
                <GppGoodIcon className="secure"/>
                <span> Secure Payments</span>
                </div>

              </Box>
              <Stack className="cart-box">
                <Box className={"cards"}>
                  <img src="/img/icons/american-express.svg"/>
                  <img src="/img/icons/visa-card.svg"/>
                  <img src="/img/icons/paypal.svg"/>
                  <img src="/img/icons/mastercard.svg"/>
                </Box>
                <p>Guaranteed Safe Checkout</p>
              </Stack>
            </Stack>
          </Stack>
          <Stack className={"info-tab"}>
                      <TabContext value={tab}>
                          <Box className={"info-nav-frame"}>
                              <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                                  <Tabs 
                                  className={"table-list"}
                                  value={tab}
                                  onChange={handleChange}
                                  aria-label="basic tabs example"
                                  >
                                      <Tab className={"list"} label="Additional Info" value={"1"}/>
                                      <Tab className={"list"} label="Reviews" value={"2"}/>
                                  </Tabs>
                              </Box>
                          </Box>
                          <Stack className={"info-main-content"}>
                               <Reviews  productComment={productComment}   commentInquiry={commentInquiry} commentTotal={commentTotal} product={product} refetchComment={refetchComment} />
                              <AdditionalInfo setTab={setTab}/>
                          </Stack>
                      </TabContext>
          </Stack>
         <Stack className="related">
         <Box> <div className="text">Dive deeper to our related products </div></Box>
              <Stack className="related-box">
                   {relatedProducts?.map((product: Product) => {
                    return (
                    <PopularProductCard key={product?._id} product={product} />
                    )
                   })}
              </Stack>
         </Stack>
      </Stack>
    );
  }
};

PropertyDetail.defaultProps = {
	initialComment: {
		page: 1,
		limit: 5,
		sort: 'createdAt',
		direction: 'DESC',
		search: {
			commentRefId: '',
		},
	},
};

export default withLayoutBasic(PropertyDetail);
