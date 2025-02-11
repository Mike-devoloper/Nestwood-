import { ArrowBackIosNewOutlined, EastOutlined, WestOutlined } from "@mui/icons-material";
import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";


const Category = () => {
  const [trendProperties, setTrendProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className="trend-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Shop By Category</span>
            <p>stunning selection furniture for Your Ideal house</p>
          </Box>
          <Box className="right">
          </Box>
        </Stack>
        <Divider sx={{ mt: '15px', mb: '17px' }} />
        <Stack className="card-box">
          <Box className="pagination-box1">
            <ArrowBackIosNewOutlined className="swiper-trend-prev" />
              <div className="swiper-trend-pagination"></div>
          </Box>
          {trendProperties.length === 0 ? (
            <Box className="empty-list">Trends Empty</Box>
          ) : (
            <Swiper
              className="trend-property-swiper"
              slidesPerView="auto"
              spaceBetween={15}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
              }}
            >
              {trendProperties.map((property, index) => (
                <SwiperSlide key={index} className="trend-property-slide">
                  <CategoryCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <Box className="pagination-box2">
            <ArrowBackIosNewOutlined className="swiper-trend-next" />
              <div className="swiper-trend-pagination"></div>
            </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Category;
