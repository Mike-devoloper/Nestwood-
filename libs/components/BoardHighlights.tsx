import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/system"
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BoardCard from "./BoardCard";

const Boardhighlights = ({ initialInput = [1, 2, 3, 4, 5, 6, 7]}: any) => {
    const [boardCards, setBoardCards] = useState<number[]>(initialInput)
    return (
        <Stack className="board-container">
            <Stack className="container">
                <Box className={"info"}>
                    <div className="title">Our Latest Blog</div>
                    <p>Creating a warm and inviting living space is crucial when it comes to furnishing your home</p>
                </Box>
                <Stack className="wrapper">
                    <Box className="switch-btn swiper-board-prev">
                        <ArrowBackIosNewOutlined />
                    </Box>
                    <Box className="card-wrapper">
                        <Swiper
                        className="board-swiper"
                        slidesPerView={"auto"}
                        spaceBetween={29}
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={{
                            nextEl: ".swiper-board-next",
                            prevEl: ".swiper-board-prev",
                        }}
                        >
                        {boardCards.map((boardCard, index) => {
                            return (
                            <SwiperSlide className="board-slide" key={index}>
                                <BoardCard />
                            </SwiperSlide>
                            );
                        })}
                        </Swiper>
                    </Box>
                    <Box className="switch-btn swiper-board-next">
                        <ArrowBackIosNewOutlined />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Boardhighlights;