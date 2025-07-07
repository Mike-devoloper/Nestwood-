import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { Button, Stack } from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { CartItem } from "libs/types/order/search";
import { REACT_APP_API_URL } from "libs/config";
import { useEffect, useState } from "react";
import { makeVar, useMutation } from "@apollo/client";
import { CREATE_ORDER } from "apollo/user/mutation";
import { userVar } from "apollo/store";
import { Message } from "libs/enums/common.enum";
import { useRouter } from "next/navigation";



interface DrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => () => void; 
    cartItems: CartItem[];
    onAdd: (item:CartItem) => void
    onRemove: (item:CartItem) => void
    onDelete: (item:CartItem) => void
    onDeleteAll: () => void

}

export default function Drawer(props:DrawerProps) {
  const [orderBuilder, setOrderBuilder] = useState<Date>(new Date())
  const router = useRouter()
    const {open, toggleDrawer, onAdd, onDelete, onDeleteAll, onRemove, cartItems} = props;
    const authMember = makeVar(userVar);
    const itemPrice: number = cartItems.reduce((a: number, c: CartItem) => a + c.price * c.quantity, 0)
    const shippingCost: number = itemPrice < 50 ? 5 : 0;
    const totalPrice = (shippingCost + itemPrice).toFixed(1);


    //Mutation 
    const [createOrderProduct] = useMutation(CREATE_ORDER);
    //Handlers 

    const proceedOrderHandler = async () => {
      try{
        if(!authMember) throw new Error(Message.NOT_AUTHENTICATED);
        await createOrderProduct({variables: {input: cartItems}})

        onDeleteAll()
        setOrderBuilder(new Date())

      } catch(err) {
        console.log("Error on ProceedOrder", err);
      }
    }

    useEffect(() => {
      setOrderBuilder(new Date())
    }, [cartItems])

    const drawerList = (
        <Box
          sx={{ width: 350, height:800 }}
          role="presentation"
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
        
            {cartItems.map((item: CartItem) => {
              const imagePath = `${REACT_APP_API_URL}/${item.image}`
              return (
                <Box sx={{ padding: "8px", display: "flex", alignItems: "center" }} key={item._id}>
                <img
                  style={{ width: "70px", height: "75px" }}
                  className="order-img"
                  src={imagePath}
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
                        {item.name}
                    </a>
                    <p style={{fontSize: "14px", fontWeight: "550"}}>{item.quantity} x ${item.price}</p>
                </div>
                <Box className={"clear-btn"} 
                sx={{
                    width: "8px",
                    height: "8px",
                    color: "red",
                }}>
               <ClearOutlinedIcon 
                onClick={() => onRemove(item)}
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
              )
            })}
      
      
          <Divider sx={{ marginTop: "20px" }} />
      
      
          <Stack
            className="info-box"
            sx={{
              width: "350px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "30px",
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
                    <p className="number"  style={{fontSize: "15px", fontWeight: "600",  paddingRight: "5px"}}>${totalPrice}</p>
                
            </Box>
            <Stack className="btn-box" 
            sx={{
                width: "350px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px"
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
                <button onClick={() => proceedOrderHandler} style={{ 
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
