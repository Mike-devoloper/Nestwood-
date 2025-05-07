import React, { useState } from "react";
import { Stack, Box, Divider, Typography, Badge, Rating, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FavoriteOutlined, RemoveRedEyeOutlined,InsertCommentOutlined} from "@mui/icons-material";
import { Product } from "libs/types/property/property";
import { REACT_APP_API_URL } from "libs/config";

interface BestProductProps {
    product: Product;
}

const BestSellingProductCard = (props: BestProductProps) => {
  const [value, setValue] = useState<number | null>(2);
  const {product} = props;
  return (
    <Stack className="popular-card-box">
        <Box  className="card-img">
            <img src={`${REACT_APP_API_URL}/${product.productImages[0]}`} alt="product-img"/>
            <Box className={"eye-icon"}>
            <Badge color="success" badgeContent={product.productViews} className={"badge-box"}>
            <IconButton color="default" className={"icon-btn"}>
                    <RemoveRedEyeOutlined />
            </IconButton>
            </Badge>
            <Badge color="success" badgeContent={product.productLikes}>
            <IconButton color={"default"} className={"icon-btn"}>
                    <FavoriteOutlined style={{ color: "red" }} />
                </IconButton>
            </Badge>
            <Badge color="success" badgeContent={product.productComments}>
            <IconButton color={"default"} className={"icon-btn"}>
                    <InsertCommentOutlined style={{ color: "red" }} />
                </IconButton>
            </Badge>
            </Box>
        </Box>
        <Stack className={"info"}>
            <strong className={"title"}>{product.productName}</strong>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                name="simple-controlled"
                sx={{color:"orange"}}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            /></Box>
            <p className={"price"}>{product.productPrice}</p>
            
           <Button className="shop-btn">Add to Cart</Button>
        </Stack>

    </Stack>
  );
};

export default BestSellingProductCard;
