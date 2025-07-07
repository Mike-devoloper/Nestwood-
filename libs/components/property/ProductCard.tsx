import {  Favorite, FavoriteOutlined, RemoveRedEyeOutlined, FavoriteBorder} from "@mui/icons-material";
import { Box, Badge, IconButton, Stack, Rating, Button } from "@mui/material";
import InsertCommentSharpIcon from '@mui/icons-material/InsertCommentSharp';
import { useEffect, useState } from "react";
import { Product } from "../../types/property/property";
import { REACT_APP_API_URL } from "../../config";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "apollo/store";
import Link from "next/link";
import { CartItem } from "libs/types/order/search";

interface NewProductProps {
    product: Product;
    likeProductHandler?: any;
    myFavorite?: boolean;
	recentlyVisited?: boolean;
    onAdd: (item: CartItem) => void;
}

const ProductCard = (props: NewProductProps) => {
    const {product, likeProductHandler, myFavorite, recentlyVisited, onAdd} = props;
    const user = useReactiveVar(userVar);
    const [value, setValue] = useState<number | null>(2);
    const isLiked = myFavorite || product?.meLiked && product?.meLiked[0]?.myFavorite

return (
    <Stack className="popular-card-box">
        <Box  className="card-img">
             <img  src={`${REACT_APP_API_URL}/${product.productImages[0]}`} alt="product-img"/>
             {!recentlyVisited && (
            <Box className={"eye-icon"}>
                <Badge color="success" badgeContent={product.productViews} className={"badge-box"}>
                <IconButton color="default" className={"icon-btn"}>
                        <RemoveRedEyeOutlined />
                </IconButton>
                </Badge>
                <Badge color="success" badgeContent={product.productLikes}>
                <IconButton color={"default"} className={"icon-btn"} onClick={() => likeProductHandler(user, product?._id)}>
                {isLiked ? <FavoriteOutlined style={{ color: "red" }} /> : <FavoriteBorder />}
                    </IconButton>
                </Badge>
                <Badge color="success" badgeContent={product.productComments}>
                <IconButton color={"default"} className={"icon-btn"} >
                        <InsertCommentSharpIcon style={{ color: "red" }} />
                    </IconButton>
                </Badge>
            </Box>
             )}
        </Box>
        <Stack className={"info"}>
                <Link   
					href={{
						pathname: '/products/detail',    
						query: { id: product?._id },
					}}
				> 
                    <strong className={"title"}>{product.productName}</strong>
                </Link>
                 
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
            
           <Button className="shop-btn" onClick={(e) => {
                          onAdd({
                            _id: product._id,
                            quantity: 1,
                            name: product.productName,
                            price: product.productPrice,
                            image: product.productImages[0]
                          })
                          e.stopPropagation()
                        }}>Add to Cart</Button>
        </Stack>

    </Stack>
)
}

export default ProductCard;