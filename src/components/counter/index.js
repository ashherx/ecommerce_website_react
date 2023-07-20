import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddToCart, setRemoveFromCart } from "../../state";

export default function Counter({ product, initialValue = 1 }) {
  const theme = useTheme();
  const [currentCount, setCurrentCount] = useState(initialValue);
  const dispatch = useDispatch();

  function increment() {
    setCurrentCount(currentCount + 1);
    dispatch(
      setAddToCart({
        product: product,
      })
    );
  }

  function decrement() {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
      dispatch(
        setRemoveFromCart({
          id: product.id,
        })
      );
    }
  }

  return (
    <Stack direction={"row"} gap={2} display={"flex"} alignItems={"center"}>
      <IconButton onClick={decrement}>
        <RemoveIcon color="primary" />
      </IconButton>
      <Typography> {currentCount} </Typography>
      <IconButton onClick={increment}>
        <AddIcon color="primary" />
      </IconButton>
    </Stack>
  );
}
