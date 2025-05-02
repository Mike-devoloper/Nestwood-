

import { GET_PRODUCTS } from "../../apollo/user/query";
import { useQuery } from "@apollo/client";
import { Box,  Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { T } from "../types/config";
import ProductCard from "./property/ProductCard";
import { ProductsInquiry } from "../types/property/property.input";
import { Product } from "../types/property/property";

interface PopularPropertiesProps {
  initialInput: ProductsInquiry
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
    console.log("getProducts =>", getProductsData);
    
    
  
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
                popularProducts?.map((product: any, index: any) => {
                    return (
                        <SwiperSlide key={index} className="popular-property-slide">
                  <ProductCard />
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