import { Box } from "@mui/material"
import { Stack } from "@mui/system"
import { REACT_APP_API_URL } from "libs/config";
import { BoardArticle } from "libs/types/article/article";

interface ArticleCardProps {
    boardArticle: BoardArticle
}
const BoardCard = (props: ArticleCardProps) => {
    const {boardArticle} = props;
    return (
        <Stack className={"board-card"}>
                <img src={`${REACT_APP_API_URL}/${boardArticle.articleImage}`} alt="furniture" />
            <Box className={"info-box"}>
                <p>2020-05-4</p>
                <div>{boardArticle.articleTitle}</div>
            </Box>
        </Stack>
    )
}

export default BoardCard;