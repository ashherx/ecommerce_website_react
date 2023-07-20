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
import { useDispatch } from "react-redux";
import { setAddToCart } from "../../state";

export default function SingleProductDesktop({ product, matches }) {
  // const [isFav, setIsFav] = useState(false)
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {/* {showOptions && (
          <ProductAddToCart show={showOptions} variant="outlined">
            Add to cart
          </ProductAddToCart>
        )} */}

        <ProductActionsWrapper show={showOptions}>
          <Stack direction={"column"}>
            {/* <ProductFavButton isFav={0}>
              <Avatar sx={{ bgcolor: Colors.secondary }}>
              <FavoriteIcon />
              </Avatar>
            </ProductFavButton> */}
            {/* <ProductActionButtons>
              <Avatar sx={{ bgcolor: Colors.secondary }}>
              <ShareIcon />
              </Avatar>
            </ProductActionButtons> */}
            <ProductActionButtons>
              <FitScreenIcon />
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
              <AddShoppingCartIcon />
            </ProductActionButtons>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      {/* <ProductAddToCart variant="contained" endIcon={< AddShoppingCartIcon/>}>Add to cart</ProductAddToCart> */}
    </>
  );
}
