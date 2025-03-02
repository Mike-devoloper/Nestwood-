import withLayoutBasic from "@/libs/components/layout/LayoutBasic"
import { Box, Divider, Link, Stack } from "@mui/material"

const finishProceed = () => {
    return (
        <Stack className="finish-proceed-page">
             <Stack className="link-box"  spacing={1}>
                <Box className={"link"} style={{color:"white"}}>
                    <Link style={{color:"white"}} href={"/checkout/proceed"}>Checkout / </Link>
                </Box>
                <div className="detail-title">Detail</div>
            </Stack>
            <Stack className="container">
                <Stack className="delivery-info">
                    <Box className={"received-text"}>Thank you. Your order has been received.</Box>
                    <Stack className="info-box">
                       <div>
                         <p className="text">Order number:</p>
                         <span>21952</span>
                       </div>
                       <Divider className="divider"/>
                       <div className="date-box">
                         <p className="text">Date:</p>
                         <span>21/09/22</span>
                       </div>
                       <Divider className="divider"/>
                       <div className="total-box">
                         <p className="text">Total:</p>
                         <span>$122.00</span>
                       </div>
                       <Divider className="divider"/>
                       <div className="payment-box">
                         <p className="text">Payment method:</p>
                         <span>Cash on delivery</span>
                       </div>
                    </Stack>
                    <Box className={"pay-text"}>Pay with cash upon delivery</Box>
                </Stack>
                <Stack className="order-info">
                    <Box className="detail-text">Order details</Box>
                    <Stack className="detail-box">
                        <div>
                            <span>Product</span>
                            <span>Total</span>
                        </div>
                        <Divider className="divider"/>
                        <div>
                            <span>Brown Side Table - red, Large × 1
                            color: red
                            size: Large
                            </span>
                            <span>$112.00</span>
                        </div>
                        <Divider className="divider"/>
                        <div>
                            <span>Subtotal:</span>
                            <span>$112.00</span>
                        </div>
                        <Divider className="divider"/>
                        <div>
                            <span>Shipping:</span>
                            <span>Flat Rate</span>
                        </div>
                        <Divider className="divider"/>
                        <div>
                            <span>Payment method:</span>
                            <span>Total</span>
                        </div>
                        <Divider className="divider"/>
                        <div>
                            <span>Total:</span>
                            <span>$112.00</span>
                        </div>
                    </Stack>
                </Stack>
                <Stack className="billing-info">
                    <Stack className="billing-address">
                        <Box className={"text"}>Billing address</Box>
                        <Stack className="billing-box">
                        <span>Mike Cooper</span>
                        <span>Silk Road</span>
                        <span>California street</span>
                        <span>California, CA 50549</span>
                        <span>661 822-3033</span>
                        <span>mikesrdispatch@gmail.com</span>
                    </Stack>
                    </Stack>
                    <Stack className="shipping">
                    <Box className={"text"}>Shipping address</Box>
                    <Stack className="address-box">
                        <span>Mike Cooper</span>
                        <span>Silk Road</span>
                        <span>California street</span>
                        <span>California, CA 50549</span>
                    </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default withLayoutBasic(finishProceed);