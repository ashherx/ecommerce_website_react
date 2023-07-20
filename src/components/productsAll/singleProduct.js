import { Avatar, Stack } from "@mui/material";
import {
  Product,
  ProductActionButtons,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Colors } from "../../styles/theme";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../../state";

export default function SingleProduct({ product, matches }) {
  const [cartItems, setCartItems] = useState(
    useSelector((state) => state.user.cart)
  );
  const dispatch = useDispatch();
  
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={"row"}>
            <ProductFavButton isFav={0}>
              <Avatar>
                <FavoriteIcon />
              </Avatar>
            </ProductFavButton>
            {/* <ProductActionButtons>
              <Avatar sx={{ bgcolor: Colors.secondary }}>
                <ShareIcon sx={{color: Colors.red}}/>
              </Avatar>
            </ProductActionButtons> */}
            <ProductActionButtons>
              <Avatar>
                <FitScreenIcon />
              </Avatar>
            </ProductActionButtons>
            <ProductActionButtons
              onClick={() => {
                dispatch(
                  setAddToCart({
                    product: product,
                  })
                );
              }}
            >
              <Avatar>
                <AddShoppingCartIcon />
              </Avatar>
            </ProductActionButtons>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      {/* <ProductAddToCart variant="contained" endIcon={< AddShoppingCartIcon/>}>Add to cart</ProductAddToCart> */}
    </>
  );
}
