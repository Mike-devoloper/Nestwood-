import {  FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, Badge, IconButton, Stack, Rating, Button } from "@mui/material";
import { useState } from "react";

const PopularPropertyCard = () => {
    const [value, setValue] = useState<number | null>(2);

return (
    <Stack className="popular-card-box">
        <Box  className="card-img">
            <img src="/img/property/chair.jpg" alt="product-img"/>
            <Box className={"eye-icon"}>
            <Badge color="success" badgeContent={1} className={"badge-box"}>
            <IconButton color="default" className={"icon-btn"}>
                    <RemoveRedEyeOutlined />
            </IconButton>
            </Badge>
            <Badge color="success" badgeContent={3}>
            <IconButton color={"default"} className={"icon-btn"}>
                    <FavoriteOutlined style={{ color: "red" }} />
                </IconButton>
            </Badge>
            </Box>
        </Box>
        <Stack className={"info"}>
            <strong className={"title"}>Nido Lounge Chair</strong>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                name="simple-controlled"
                sx={{color:"#000"}}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            /></Box>
            <p className={"price"}>$99.00</p>
            
           <Button className="shop-btn">Add to Cart</Button>
        </Stack>

    </Stack>
)
}

export default PopularPropertyCard;