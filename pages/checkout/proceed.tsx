import withLayoutBasic from "@/libs/components/layout/LayoutBasic"
import { Box, Button, Divider, Link, Radio, Stack } from "@mui/material"
import React from "react";

const Checkout = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };
    return (
        <Stack className="checkout-page">
            <Stack className="link-box"  spacing={1}>
                <Box className={"link"} style={{color:"white"}}>
                    <Link style={{color:"white"}} href={"/"}>Home / </Link>
                </Box>
                <div className="detail-title">Checkout</div>
            </Stack>
            <Stack className="container">
                <Stack className={"right"}>
                    <span className="text">Billing Address</span>
                    <form className="forum-box" action={"/order-detail"}>
                        <Box className={"name-box"}>
                         <span>First name</span>
                         <span>Last name</span>
                        </Box>
                        <Box className="input-box">
                            <input className={"name"} type="text" required placeholder="name"/>
                            <input className={"last"} type="text" placeholder="Last Name"/>
                        </Box>
                        <span>Company Name (optional)</span>
                        <input type="text" placeholder="Last Name"/>
                        <span>Country / Region </span>
                        <input type="text" placeholder="United States (US)"/>
                        <span>Street Address</span>
                        <input type="text" placeholder="California street"/>
                        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"/>
                        <span>Town / City</span>
                        <input type="text" placeholder="California"/>
                        <span>State</span>
                        <input type="text" placeholder="California"/>
                        <span>Zip Code</span>
                        <input type="text" placeholder="zipcode"/>
                        <span>Phone</span>
                        <input type="phone" placeholder="Phone Number"/>
                        <span>Email address</span>
                        <input type="phone" placeholder="Email address"/>
                    </form>

                </Stack>
                <Stack className={"left"}>
                    <span className="text">Your Order</span>
                    <Stack className="order-detail">
                        <Box className={"subtotal"}>
                            <p>Product</p>
                            <p>Subtotal</p>
                        </Box>
                        <Divider/>
                        <Box className={"subtotal"}>
                            <p>Elephant Chair - Medium, white  × 1</p>
                            <p>	$68.00</p>
                        </Box>
                        <Divider/>
                        <Box className={"subtotal"}>
                            <p>Subtotal</p>
                            <p>	$68.00</p>
                        </Box>
                        <Divider/>
                        <Box className={"subtotal"}>
                            <p>Shipping</p>
                            <p>	Flat rate</p>
                        </Box>
                        <Divider/>
                        <Box className={"subtotal"}>
                            <p>Total</p>
                            <p>$68.00</p>
                        </Box>
                        <Divider/>
                    </Stack>
                    <Stack className="payment-box">
                        <Box className={"pay-type"}>
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <span>Direct bank transfer</span>
                        </Box>
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <Box className={"pay-type"}>
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <span>Cash on delivery</span>
                        </Box>
                        <p className="cash-text">Pay with cash upon delivery.</p>
                        <Button className="place-order">Place order</Button>
                    </Stack> 
                </Stack>
            </Stack>
        </Stack>
    )
}

export default withLayoutBasic(Checkout);