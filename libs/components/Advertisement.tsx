import React from "react";
import { Box, Stack } from "@mui/material";

const Advertisement = () => {
  return (
    <Stack className="ads-frame">
        <Box className={"ad-box"}>
            <img src="/img/icons/shipping.svg" alt="shipping" width={"60px"}/>
            <h3>Free Fast Shipping</h3>
            <p>Furniture refers objects intended support various activities seating eating</p>
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/dispathcing.svg" alt="dispatching" width={"60px"}/>
            <h3>Free Fast Shipping</h3>
            <p>Furniture refers objects intended support various activities seating eating</p>
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/payment.svg" alt="payment" width={"60px"}/>
            <h3>Free Fast Shipping</h3>
            <p>Furniture refers objects intended support various activities seating eating</p>
        </Box>
        <Box className={"ad-box"}>
            <img src="/img/icons/gift.svg" alt="gift" width={"60px"}/>
            <h3>Free Fast Shipping</h3>
            <p>Furniture refers objects intended support various activities seating eating</p>
        </Box>
    </Stack>
  );
};

export default Advertisement;
