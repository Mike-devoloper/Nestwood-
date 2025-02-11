import { Box } from "@mui/material"
import { Stack } from "@mui/system"

const BoardCard = () => {
    return (
        <Stack className={"board-card"}>
                <img src="/img/property/furni3.jpg" alt="furniture" />
            <Box className={"info-box"}>
                <p>June 02, 2023</p>
                <div>The top furniture brands grabbed this opportunity and bloomed their wings</div>
            </Box>
        </Stack>
    )
}

export default BoardCard;