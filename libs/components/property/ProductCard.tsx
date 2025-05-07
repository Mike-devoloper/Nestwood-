import {  FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, Badge, IconButton, Stack, Rating, Button } from "@mui/material";
import InsertCommentSharpIcon from '@mui/icons-material/InsertCommentSharp';
import { useState } from "react";
import { Product } from "../../types/property/property";
import { REACT_APP_API_URL } from "../../config";

interface NewProductProps {
    product: Product;
}

const ProductCard = (props: NewProductProps) => {
    const {product} = props;
    const [value, setValue] = useState<number | null>(2);
    console.log(`${REACT_APP_API_URL}/${product.productImages[0]}`);

return (
    <Stack className="popular-card-box">
        <Box  className="card-img">
            <img  src={`${REACT_APP_API_URL}/${product.productImages[0]}`} alt="product-img"/>
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
                    <InsertCommentSharpIcon style={{ color: "red" }} />
                </IconButton>
            </Badge>
            </Box>
        </Box>
        <Stack className={"info"}>
            <strong className={"title"}>{product.productName}</strong>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                name="simple-controlled"
                sx={{color:"#000"}}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            /></Box>
            <p className={"price"}>${product.productPrice}</p>
            
           <Button className="shop-btn">Add to Cart</Button>
        </Stack>

    </Stack>
)
}

export default ProductCard;