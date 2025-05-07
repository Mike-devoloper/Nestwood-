import { useQuery } from "@apollo/client";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { GET_ALL_AGENTS } from "apollo/user/query";
import { T } from "libs/types/config";
import { AgentsInquiry, Member } from "libs/types/member/member";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide,Swiper } from "swiper/react";
import TopAgentCard from "./TopAgentCard";

interface TopAgentsProps {
    initialInput: AgentsInquiry;
  }

const TopAgents = (props: TopAgentsProps) => {
    const [topAgents, setTopAgents] = useState<Member[]>([]);
    const {initialInput} = props;
    const {
        loading: getAgentsLoading,
      data: getAgentsData,
      error: getAgentsError,
      refetch: getAgentsRefetch,
    } = useQuery(GET_ALL_AGENTS, {
        fetchPolicy: "network-only",
      variables: {
        input: initialInput
      },
      notifyOnNetworkStatusChange: true,
      onCompleted(data: T) {
        setTopAgents(data?.getAgents?.list || [])
      },
    })
    
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
                        modules={[ Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl: ".swiper-agents-next",
                            prevEl: ".swiper-agents-prev",
                        }}
                        >
                        {topAgents.map((agent) => {
                            return (
                            <SwiperSlide className="top-agents-slide" key={agent._id}>
                                <TopAgentCard member={agent}/>
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
TopAgents.defaultProps = {
    initialInput: {
      page: 1,
      limit: 7,
      search: {},
    },
  };
export default TopAgents;