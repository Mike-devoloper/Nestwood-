import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellingProductCard from "./BestSellingCard";

const TopProperties = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

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
            bestSellingProducts?.map((property, index) => {
                return (
                    <SwiperSlide key={index} className="popular-property-slide">
              <BestSellingProductCard/>
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

export default TopProperties;
