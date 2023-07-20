import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { emptyCart } from "../../state";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Cart({ product }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentCart = useSelector((state) => state.user.cart);

  const [purchase, setPurchase] = useState(false);

  let uniqueItems = [...new Set(currentCart.map((product) => product.id))];
  let updatedProducts = [];
  currentCart.forEach((element) => {
    if (uniqueItems.includes(element.id)) {
      updatedProducts.push(element);
      uniqueItems.shift();
    }
  });

  let totalPrice = 0;
  currentCart.forEach((product) => {
    totalPrice += product.price;
  });

  const cartItems = updatedProducts.map((product) => (
    <Grid
      xs={4}
      sm={4}
      md={3}
      item
      key={product.id}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <CartItem product={product} />
    </Grid>
  ));

  function clearCart() {
    dispatch(emptyCart());
  }

  let invNumber = "";
  invNumber = `INV-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

  function handlePurchase() {
    setPurchase(true);
    invNumber = `INV-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    
  }

  function handleShopMore()
  {
    clearCart()
    navigate("/catalog")
  }

  return (
    <>
      {purchase ? (
        <>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <Box display={"flex"}>
                <Typography color="primary" variant="h3">
                  ORDER RECIEPT
                </Typography>
              </Box>

              <Box>
                <Typography color="primary" variant="h5">
                  {" "}
                  Invoice Number: {invNumber}{" "}
                </Typography>
                <Typography color="primary" variant="h5">
                  {" "}
                  Total Items: {currentCart.length}{" "}
                </Typography>
                <Typography color="primary" variant="h5">
                  {" "}
                  Total Price: ${totalPrice}{" "}
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <img src="../../images/banner/order.svg" />
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent={"center"}>
            <Button variant="contained" onClick={handleShopMore}>
              SHOP MORE
            </Button>
          </Box>
        </>
      ) : (
        <Container>
          {cartItems.length > 0 && (
            <Box display={"flex"} justifyContent={"center"} gap={10} p={5}>
              <Typography variant="h4" color={"primary"}>
                Total: ${totalPrice}
              </Typography>

              <Button variant="contained" onClick={handlePurchase}>
                {" "}
                PURCHASE{" "}
              </Button>
            </Box>
          )}

          {cartItems.length > 0 ? (
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              justifyContent={"center"}
              sx={{ margin: "20px 4px 10px opx" }}
              columns={{ xs: 4, sm: 4, md: 9 }}
            >
              {cartItems}
            </Grid>
          ) : (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography variant="h5" color="primary">
                {" "}
                There is nothing in the cart{" "}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/catalog")}
              >
                Shop Here
              </Button>
            </Box>
          )}
        </Container>
      )}
    </>
  );
}
