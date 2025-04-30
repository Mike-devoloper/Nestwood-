

import { GET_PRODUCTS } from "@/apollo/user/query";
import { useQuery } from "@apollo/client";
import { Box,  Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { T } from "../types/config";
import ProductCard from "./property/ProductCard";



const PopularProperties = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
    const [popularProducts, setPopularProducts] = useState<number[]>(initialInput);

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
          search: {},
        },
      },
      notifyOnNetworkStatusChange: true,
      onCompleted(data: T) {
        setPopularProducts(data?.getProducts?.list)
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
  



export default PopularProperties;