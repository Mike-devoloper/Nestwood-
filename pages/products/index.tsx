import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import Filter from "../../libs/components/property/Filter";
import ProductCard from "../../libs/components/property/ProductCard";
import useDeviceDetect from "../../libs/hooks/useDeviceDetect";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Property:NextPage = () => {
   const device = useDeviceDetect()
   const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6])

   if(device === "mobile") {
      return <Stack>PROPERTYLIST PAGE</Stack>
   } else {
      return (
         <div id="property-list-page" style={{position: "relative"}}>
            <Stack className="link-box"  spacing={1}>
              <Box className={"link"}>
                <Link href={"/"}>Home / </Link>
              </Box>
              <div className="detail-title">Products</div>
          </Stack>
            <Stack className="container">
               <Box className="right">
                  <Stack className="total-result">
                     <Typography>Showing 5 results of available products</Typography>
                  </Stack>
                  <span>Sort by</span>
                  <div>
                     <Button endIcon={<KeyboardArrowDown/>}>New</Button>
                  </div>
               </Box>
               <Stack className="property-page">
                     <Stack className="filter-config">
                        <Filter/>
                     </Stack>
                     <Stack className="main-config" mb={"76px"}>
                        <Stack className="list-config">
                           {properties.map((property, index) => {
                              return <ProductCard key={index}/>
                           })}
                        </Stack>
                        <Stack className="pagination-config">
                           <Stack className="pagination-box">
                              <Pagination 
                                 page={1} 
                                 count={5} 
                                 shape="circular" 
                                 color="primary" 
                              />
                           </Stack>
                        </Stack>
   
                     </Stack>
               </Stack>
            </Stack>
         </div>
       )
   }
 }
 
 export default withLayoutBasic(Property);