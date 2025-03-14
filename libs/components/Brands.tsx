import React from "react";
import { Box, Stack } from "@mui/material";

const Brands = () => {
  return (
    <Stack className="brands-frame">
        <Box className={"ad-box"}>
        <h1>Select popular brands</h1>
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/brands/brand1.jpg" alt="shipping" />
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/brands/brand2.jpg" alt="shipping"/>
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/brands/brand3.jpg" alt="shipping"/>
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/brands/brand4.jpeg" alt="shipping" />
        </Box>
    </Stack>
  );
};

export default Brands;
