import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Typography from "@mui/material/Typography";
import { Box, IconButton, Rating, Stack } from "@mui/material";
import { FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";

const PopularProductCard = () => {
    const [value, setValue] = React.useState<number | null>(2);
  return (
    <Stack className={"popular-card-container"}>
     <Card className="card-box">
        <CardMedia
            className="card-img"
            image="/img/property/chair.jpg"
        />
        <CardContent className="card-content">
            <Box className={"text-box"}>
            <Typography gutterBottom variant="h2" component="div" className="product-title">
                Sofa 
            </Typography>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Typography>
        </CardContent>
        <Box className={"icon-box"}>
            <div className="price">$904</div>
                    <IconButton color="inherit" className={"icon-btn"}>
                            <RemoveRedEyeOutlined />
                            <span>3</span>
                    </IconButton>
                    <IconButton color={"default"} className={"icon-btn"}>
                    <FavoriteOutlined style={{ color: "red" }} /> 
                    <span>4</span>
                        </IconButton>
                    <IconButton color={"default"} className={"icon-btn"} >
                        <ModeCommentOutlinedIcon style={{color: "grey"}}/>
                        <span>2</span>
                        </IconButton>
                
        </Box>
    </Card>
    </Stack>
    
  );
};

export default PopularProductCard;
