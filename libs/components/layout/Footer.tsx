import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { FacebookOutlined, Instagram, Telegram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Stack } from "@mui/system"
import Link from "next/link";

const Footer = () => {
    const device = useDeviceDetect()
    if(device === "mobile") {
        return (<Stack className={"footer-container"}>FOOTER MOBILE</Stack>)
    } else {
        return (
            <Stack className={"footer-container"}>
                <Stack className={"main"}>
                    <Stack className={"left"}>
                        <Box component={"div"} className={"logo"}>
                            <Link href={"/"}>
                            <img src="/img/logo/favicon.svg" alt="logo" />
                            </Link>
                            <div className="title">Nestwood</div>
                        </Box>
                        <Box component={"div"} className={"footer-box"}> 
                            <span>total free custumer care</span>
                            <p>+82 10 4867 2909</p>
                        </Box>
                        <Box component={"div"} className={"footer-box"}>
                          <span>nee live</span>
                          <p>+82 10 4867 2909</p>
                          <span>Support?</span>
                        </Box>
                        <Box component={"div"} className={"footer-box"}>
                        <span>Follow us on Social media</span>
                        <div className="media-box">
                            <FacebookOutlined/>
                            <Telegram/>
                            <Instagram/>
                            <Twitter/>
                        </div>
                        </Box>
                    </Stack>
                    <Stack className={"right"}>
                         <Box component={"div"} className={"top"}> 
                            <strong>keep yourself up to date</strong>
                            <div>
                                <input type="text" placeholder="Your Email" />
                                <span>Subscribe</span>
                            </div>
                        </Box>
                        <Box component={"div"} className={"bottom"}> 
                            <div>
                                <strong>Popular search</strong>
                                <span>Chair for living room</span>
                                <span>Furniture price low to Hide</span>
                            </div>
                            <div>
                                <strong>Quick links</strong>
                                <span>Terms of use</span>
                                <span>Privacy Policy</span>
                                <span>Our Services</span>
                                <span>Pricing Plans</span>
                                <span>Contact Support</span>
                                <span>FAQs</span>
                            </div>
                            <div>
                                <strong>Discover</strong>
                                <span>Chair</span>
                                <span>Dining Table</span>
                                <span>Round Table</span>
                                <span>Sofa-Bed</span>
                                <span>Wardrobe</span>
                            </div>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"second"}>
                    <span>Nestwood -All rights reserved. Nestwood 2024</span>
                    <span>Privacy Terms Sitemap</span>
                </Stack>
            </Stack>
        )
    }
    
}

export default Footer;