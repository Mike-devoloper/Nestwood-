import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Typography from "@mui/material/Typography";
import { Box, IconButton, Rating, Stack } from "@mui/material";
import { FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Product } from "libs/types/property/property";
import { userVar } from "apollo/store";
import { useReactiveVar } from "@apollo/client";
import { REACT_APP_API_URL } from "libs/config";
import Link from "next/link";


interface PopularProductProps {
    product: Product;
    likeProductHandler?: any;
    myFavorite?: boolean;
	recentlyVisited?: boolean;
}

const PopularProductCard = (props:PopularProductProps ) => {
    const [value, setValue] = React.useState<number | null>(2);
    const user = useReactiveVar(userVar);
    const {product, likeProductHandler, myFavorite, recentlyVisited} = props;
  return (
    <Stack className={"popular-card-container"}>
     <Card className="card-box">
        <CardMedia
            className="card-img"
            image={`${REACT_APP_API_URL}/${product.productImages[0]}`}
        />
        <CardContent className="card-content">
            <Box className={"text-box"}>
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
                    className="rate"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                /></Box>
            </Box>
            <Typography className="desc">
                {product?.productDesc}
            </Typography>
        </CardContent>
        <Box className={"icon-box"}>
            <div className="price">${product?.productPrice}</div>
                    <IconButton color="inherit" className={"icon-btn"}>
                            <RemoveRedEyeOutlined />
                            <span>{product?.productViews}</span>
                    </IconButton>
                    <IconButton color={"default"} className={"icon-btn"}>
                    <FavoriteOutlined style={{ color: "red" }} /> 
                    <span>{product?.productLikes}</span>
                        </IconButton>
                    <IconButton color={"default"} className={"icon-btn"} >
                        <ModeCommentOutlinedIcon style={{color: "grey"}}/>
                        <span>{product?.productComments}</span>
                        </IconButton>
                
        </Box>
    </Card>
    </Stack>
    
  );
};

export default PopularProductCard;
