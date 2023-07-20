import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Counter from "../counter";
import { Colors } from "../../styles/theme";
import { useSelector } from "react-redux";

export default function CartItem({product}) {
  const theme = useTheme();

  const currentCart = useSelector((state)=> state.user.cart)
  const initialVallue = currentCart.filter((element2) => element2.id === product.id).length

  return (
    <Card sx={{ display: "flex", height: "180px", width: "320px", bgcolor: Colors.light_gray }}>
      <CardMedia
        component="img"
        sx={{ width: 151, p: 1 }}
        image={product.image}
        alt={product.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <CardContent sx={{ flex: "1 0 auto", }}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="subtitle1" color="primary" fontWeight={"bold"}>
            ${product.price}/piece
          </Typography>

          <Counter product={product} initialValue={initialVallue}/>
        </CardContent>

        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>    
        </Box>
      </Box>
    </Card>
  );
}
