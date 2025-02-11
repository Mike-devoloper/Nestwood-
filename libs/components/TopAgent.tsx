import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { SwiperSlide,Swiper } from "swiper/react";
import TopAgentCard from "./TopAgentCard";

const TopAgents = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
    const [topAgents, setTopAgents] = useState<number[]>(initialInput);
    return (
        <Stack className="top-agents">
            <Stack className="container">
                <Stack className="info-box">
                    <Box className="left">
                        <span>Top Agents</span>
                        <p>Our Top Agents always ready to serve</p>
                    </Box>
                </Stack>
                <Stack className="wrapper">
                    <Box className="switch-btn swiper-agents-prev">
                        <ArrowBackIosNewOutlined />
                    </Box>
                    <Box className="card-wrapper">
                        <Swiper
                        className="top-agents-swiper"
                        slidesPerView={"auto"}
                        spaceBetween={29}
                        navigation={{
                            nextEl: ".swiper-agents-next",
                            prevEl: ".swiper-agents-prev",
                        }}
                        >
                        {topAgents.map((agent, index) => {
                            return (
                            <SwiperSlide className="top-agents-slide" key={index}>
                                <TopAgentCard />
                            </SwiperSlide>
                            );
                        })}
                        </Swiper>
                    </Box>
                    <Box className="switch-btn swiper-agents-next">
                        <ArrowBackIosNewOutlined />
                    </Box>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default TopAgents;