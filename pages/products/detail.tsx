import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Box, Button, Container, Divider, FormControl, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Stack, Tab, Tabs } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import AdditionalInfo from "@/libs/components/property/AdditionalTab";
import Reviews from "@/libs/components/comment/Reviews";



const imagePath = [{ url: "/img/property/furni1.jpg" }, { url: "/img/property/furni2.jpg" }, { url: "/img/property/furni3.jpg" }];

const PropertyDetail = ({initialInput = [1, 2, 3, 4, 5], ...props}): any => {
  const device = useDeviceDetect();
  const [slideImage, setSlideImage] = useState<string>("/img/property/bigImage.png");
  const [value, setValue] = useState<number | null>(2);
  const [size, setSize] =useState<string>('');
  const [color, setColor] =useState<string>('');
  const [tab, setTab] = useState<string>("1")
  const [popularProperties, setPopularProperties] = useState<number[]>(initialInput);
  const changeImageHandler = (image: string) => {
    setSlideImage(image);
  };

  const sizeHandler = (event: SelectChangeEvent) => {
    setSize(event.target.value)
  }
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setTab(newValue)
}
const colorHandler = (event: SelectChangeEvent) => {
  setColor(event.target.value)
}

  if (device === "mobile") {
    return <Stack>PROPERTYLIST PAGE</Stack>;
  } else {
    return ( 
      <Stack className="product-detail">
          <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/products"}>Product / </Link>
              </Box>
              <div className="detail-title">Detail</div>
          </Stack>
          <Stack className="container">
            <Stack className={"images"}>
              <Stack className={"main-image"}>
                <img src={slideImage} alt="main-image" />
              </Stack>
              <Stack className={"sub-images"}>
                {imagePath.map((image, index) => (
                  <Stack
                    className={"sub-img-box"}
                    onClick={() => changeImageHandler(image.url)}
                    key={index}
                  >
                    <img src={image.url} alt="sub-image" />
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Divider className="divider1"/>
            <Stack className={"detail"}>
              <Box className={"info-box"}>
                <span className="name">Sofa</span>
                <h1>Book Shelf Drawers</h1>
                <Box className={"stars"} sx={{ '& > legend': { mt: 2 } }}>
                  <Rating
                  name="simple-controlled"
                  sx={{color:"orange"}}
                  value={value}
                  onChange={(event, newValue) => {
                  setValue(newValue);
                  }}
              /></Box>
              <p className={"price"}>$99.00</p>
              <Box className={"desc"}>
                <p>A sofa is a comfortable piece of furniture that can accommodate multiple persons at once.
                  You and your pals might cuddle up on the couch with popcorn and scary flicks on a wet weekend.</p>
              </Box>
              </Box>
              <Divider/>
              <Box className={"option"}>
                <p className="size">size</p>
                <FormControl  className={"form-control"} size="small" sx={{ "& .MuiOutlinedInput-notchedOutline": { border: " 1px solid black" } }}>
                <Select
                  labelId="demo-select-small-label"
                  className="selector"
                  value={size}
                  onChange={sizeHandler}
                  sx={{
                    "&.MuiOutlinedInput-root": {
                      "& fieldset": { border: "1px solid black" },
                      "&:hover fieldset": { border: "1px solid black" },
                      "&.Mui-focused fieldset": { border: "1px solid black" } 
                    }
                  }}
              
                >
                  <MenuItem value="Choose an size">
                    <em>choose a size</em>
                  </MenuItem>
                  <MenuItem className="menuItem" value={"Large"}>Large</MenuItem>
                  <MenuItem className="menuItem" value={"Medium"}>Medium</MenuItem>
                  <MenuItem className="menuItem" value={"Small"}>Small</MenuItem>
                </Select>
                </FormControl>
              </Box>
              <Box className={"option-sec"}>
                <p className="color">color</p>
                <FormControl  className={"form-control"} size="small" sx={{ "& .MuiOutlinedInput-notchedOutline": { border: " 1px solid black" } }}>
                <Select
                  labelId="demo-select-small-label"
                  className="selector"
                  value={color}
                  onChange={colorHandler}
                  sx={{
                    "&.MuiOutlinedInput-root": {
                      "& fieldset": { border: "1px solid black" },
                      "&:hover fieldset": { border: "1px solid black" },
                      "&.Mui-focused fieldset": { border: "1px solid black" } 
                    }
                  }}
              
                >
                  <MenuItem className="menuItem" value={"Red"}>Red  <div className="color"></div></MenuItem>
                  <MenuItem className="menuItem" value={"Yellow"}>Yellow</MenuItem>
                  <MenuItem className="menuItem" value={"Black"}>Black</MenuItem>
                  <MenuItem className="menuItem" value={"Brown"}>Brown</MenuItem>
                </Select>
                </FormControl>
                <Stack className="btn-box">
                  <Box className={"counter"}>
                    <button >-</button>
                    <p>2</p>
                    <button>+</button>  
                  </Box> 
                    <Button className="add-btn">Add to cart<AddShoppingCartIcon className="basket"/></Button> 
                  <Box className="icon-like">
                    <FavoriteBorderIcon className="like"/>
                  </Box>
                </Stack>
              </Box>
              <Divider/>
              <Box className={"shipping-box"}>
                <p><LocalShippingIcon className="shipping"/>Free shipping on orders over $50!</p>
                <div className="info">
                <GppGoodIcon className="secure"/>
                <span> Satisfaction Guaranteed</span>
                </div>
                <div className="info">
                <GppGoodIcon className="secure"/>
                <span>No Hassle Refunds</span>
                </div>
                <div className="info">
                <GppGoodIcon className="secure"/>
                <span> Secure Payments</span>
                </div>

              </Box>
              <Stack className="cart-box">
                <Box className={"cards"}>
                  <img src="/img/icons/american-express.svg"/>
                  <img src="/img/icons/visa-card.svg"/>
                  <img src="/img/icons/paypal.svg"/>
                  <img src="/img/icons/mastercard.svg"/>
                </Box>
                <p>Guaranteed Safe Checkout</p>
              </Stack>
            </Stack>
          </Stack>
          <Stack className={"info-tab"}>
                      <TabContext value={tab}>
                          <Box className={"info-nav-frame"}>
                              <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                                  <Tabs 
                                  className={"table-list"}
                                  value={tab}
                                  onChange={handleChange}
                                  aria-label="basic tabs example"
                                  >
                                      <Tab className={"list"} label="Additional Info" value={"1"}/>
                                      <Tab className={"list"} label="Reviews" value={"2"}/>
                                  </Tabs>
                              </Box>
                          </Box>
                          <Stack className={"info-main-content"}>
                              <Reviews setTab={setTab}/>
                              <AdditionalInfo setTab={setTab}/>
                          </Stack>
                      </TabContext>
          </Stack>
         <Stack className="related">
         <Box> <div className="text">Related</div></Box>
              <Stack className="container-box">
                  <Stack className="img-box">
                    <div className="color">RED</div>
                    <div className="color">RED</div>
                    <div className="color">RED</div>
                    <div className="color">RED</div>
                    <div className="color">RED</div>
                  </Stack>
              </Stack>
         </Stack>
      </Stack>
    );
  }
};

export default withLayoutBasic(PropertyDetail);
