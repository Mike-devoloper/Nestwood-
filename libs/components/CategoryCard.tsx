import React from "react";
import { Stack, Box, Button } from "@mui/material";



const CategoryCard = ({url, name , alt, index}: any) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
        <Box key={index} className="trend-card-box">
          <div className="card-img">
            <img src={url} alt={alt} />
            <button>{name}</button>
          </div>
        </Box>
    </Stack>
  );
};


export default CategoryCard;



