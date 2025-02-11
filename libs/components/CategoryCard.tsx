import React from "react";
import { Stack, Box, Button } from "@mui/material";

const CategoryCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
      >
        <img src="/img/property/chair.jpg" alt="furniture" />
        <Button>Chair</Button>
      </Box>
    </Stack>
  );
};

export default CategoryCard;
