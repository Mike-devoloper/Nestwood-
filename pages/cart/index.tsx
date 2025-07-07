import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import { ClearOutlined } from "@mui/icons-material";
import { Box,  Button,  Divider,  Stack, Typography } from "@mui/material"
import Link from "next/link";


const Cart = () => {
    return (
        <Stack className="cart-page">
              <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/"}>Home / </Link>
              </Box>
              <div className="detail-title">Cart</div>
          </Stack>
            <Stack className="container">
                <Stack className="left">
                    <Box className={"text-box"}>
                      <Typography className="text">Product</Typography>
                        <Box className={"info-box"}>
                        <Typography>Price</Typography>
                         <Typography>Quantity</Typography>
                         <Typography>Subtotal</Typography>
                        </Box>
                    </Box>
                    <Divider/>
                    <Stack className="order-box">
                        <Box className={"img-box"}>
                            <ClearOutlined className="clear-icon"/>
                            <img src="/img/property/furni2.jpg" alt="furniture-img" />
                            <span className="product-name">Book Shelf Drawer- Large</span>
                        </Box>
                        <Box className={"order-info"}>
                            <p className="price">$90.00</p>
                            <Box className={"counter"}>
                                <button >-</button>
                                <p>2</p>
                                <button>+</button>  
                            </Box> 
                            <p>$90.00</p>
                        </Box>
                    </Stack>
                    <Divider/>
                    <Box className={"btn-box"}>
                        <Button className="update-btn">Update Cart</Button>
                    </Box>
                </Stack>
                <Stack className="right">
                    <Typography className="text">Cart Totals</Typography>
                   <Stack className="info-box">
                        <Box className={"right-info"}>
                            <p>Subtotal</p>
                            <Divider/>
                            <p>Shipping</p>
                            <Divider/>
                            <p>Total</p>
                            <Divider/>
                        </Box>
                        <Box className={"left-info"}>
                            <p>$90.00</p>
                            <p>Flat rate Shipping to CA.</p>
                            <p>$90.00</p>
                        </Box>
                   </Stack>
                   <Box className={"btn-box"}>
                        <Button className="proceed-btn">Proceed to Checkout</Button>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default withLayoutBasic(Cart);