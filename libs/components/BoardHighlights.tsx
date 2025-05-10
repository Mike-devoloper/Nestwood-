import { useQuery } from "@apollo/client";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/system"
import { GET_ALL_ARTICLES } from "apollo/user/query";
import { BoardArticle } from "libs/types/article/article";
import { AllBoardArticlesInquiry } from "libs/types/article/article-input";
import { T } from "libs/types/config";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BoardCard from "./BoardCard";

interface BoardArticleProps {
    initialInput: AllBoardArticlesInquiry
}

const Boardhighlights = (props: BoardArticleProps) => {
    const {initialInput} = props;
    const [boardCards, setBoardCards] = useState<BoardArticle[]>([])


    const {
        loading: getArticlesLoading,
        data: getArticlesData,
        error: getArticlesError,
        refetch: getArticlesRefetch,
      } = useQuery(GET_ALL_ARTICLES, {
        fetchPolicy: "network-only",
        variables: {
          input: initialInput
        },
        notifyOnNetworkStatusChange: true,
        onCompleted(data: T) {
          setBoardCards(data?.getBoardArticles?.list || [])
        },
      });
      
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
                        {boardCards.map((boardArticle) => {
                            return (
                            <SwiperSlide className="board-slide" key={boardArticle?._id}>
                                <BoardCard boardArticle={boardArticle}/>
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

Boardhighlights.defaultProps = {
    initialInput: {
      page: 1,
      limit: 7,
      search: {},
    },
  };
export default Boardhighlights;