import { GET_PRODUCTS } from "../../apollo/user/query";
import { useQuery } from "@apollo/client";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellingProductCard from "./BestSellingCard";
import { ProductsInquiry } from "libs/types/property/property.input";
import { T } from "libs/types/config";
import { Product } from "libs/types/property/property";

interface TopPropertiesProps {
  initialInput: ProductsInquiry
}

const TopProperties = (props: TopPropertiesProps) => {
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);

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
      setBestSellingProducts(data?.getProducts?.list || [])
      console.log("BestSelling => ", data?.getProducts?.list || [])
    },
  });

  return (
    <Stack className="best-products">
    <Stack className="container">
      <Stack className="info-box">
        <Box className="left">
          <span>Best Selling Products</span>
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
            bestSellingProducts?.map((product, index) => {
                return (
                    <SwiperSlide key={index} className="popular-property-slide">
              <BestSellingProductCard product={product}/>
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

TopProperties.defaultProps = {
  initialInput: {
    page: 1,
    limit: 7,
    sort: 'productLikes',
    direction: 'DESC',
    search: {},
  },
};

export default TopProperties;
