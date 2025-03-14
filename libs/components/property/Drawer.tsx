import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { Button, Stack } from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';



interface DrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => () => void;  
}

export default function Drawer({ open, toggleDrawer }: DrawerProps) {

    const drawerList = (
        <Box
          sx={{ width: 350, height: "auto"}}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <Box className={"review-text"} sx={{
                width: "100%", 
                height: "40px", 
                backgroundColor: "#000", 
                color: "#fff", 
                fontSize: "18px", 
                fontWeight: "600", 
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px"}}>
                <div>Review Cart:</div>
            </Box>
         <Box sx={{ padding: "8px", display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "70px", height: "75px" }}
              className="order-img"
              src="/img/property/furni1.jpg"
            />
            <div className="name-box" 
            style={{
                width: "220px",
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                lineHeight: "2rem"
            }}>
                <a href="/products/detail" className="order-name" 
                style={{  
                    color: "rgba(0, 0, 0, 0.8)", 
                    fontSize: "15px",
                    fontWeight: "500",
                    }}>
                     Nideo wooden chair
                </a>
                <p style={{fontSize: "14px", fontWeight: "550"}}>2 x $79.00</p>
            </div>
            <Box className={"clear-btn"} 
            sx={{
                width: "8px",
                height: "8px",
                color: "red",
            }}>
           <ClearOutlinedIcon 
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                color: "red",
                borderRadius:" 50%",
                "&:hover": {
                  backgroundColor: "red",
                  color: "#fff",
                  transition:" all 0.4s ease-out"
                },
              }} 
            />
            </Box>
          </Box>
      
      
          <Divider sx={{ marginTop: "20px" }} />
      
      
          <Stack
            className="info-box"
            sx={{
              width: "350px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "350px",
            }}
          >

            <Box className={"total-box"} 
                sx={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "rgba(0, 0, 0, 0.07)",
                    marginBottom: "30px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    

                }}>
                    <p className="text" style={{fontSize: "15px", fontWeight: "600", paddingLeft: "5px"}}>Subtotal:</p>
                    <p className="number"  style={{fontSize: "15px", fontWeight: "600",  paddingRight: "5px"}}>$158.00</p>
                
            </Box>
            <Stack className="btn-box" 
            sx={{
                width: "350px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <button style={{ 
                    padding: "14px", 
                    color: "#fff", 
                    backgroundColor: "#000",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "550", }}>
                View Cart
                </button>
                <button style={{ 
                    padding: "14px", 
                    color: "#fff", 
                    backgroundColor: "#000",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "550", }}>
                Checkout
                </button>
            </Stack>
          </Stack>
        </Box>
      );
      

  return (
    <div>
      <SwipeableDrawer
        
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
            "& .MuiDrawer-paper": {
                width: "400px",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px 0 0 10px",
                boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.1)",
              }
        }}
      >
        {drawerList}
      </SwipeableDrawer>
    </div>
  );
}
