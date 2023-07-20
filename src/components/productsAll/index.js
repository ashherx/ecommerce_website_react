import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { productsAll } from "../../data";
import SingleProduct from "./singleProduct";
import SingleProductDesktop from "./singleProductDesktop";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../styles/theme";
import { useState } from "react";


export default function ProductsAll() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [search, setSearch] = useState("");

  // const renderProducts = productsAll.map((product) => (
  const renderProducts = productsAll
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    )
    .map((filteredProduct) => (
      <Grid
        xs={2}
        sm={4}
        md={3}
        item
        key={filteredProduct.id}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {matches ? (
          <SingleProduct product={filteredProduct} matches={matches} />
        ) : (
          <SingleProductDesktop product={filteredProduct} matches={matches} />
        )}
      </Grid>
    ));

  return (
    <Container>
      <Box display={"flex"} justifyContent={"center"} mb={4}>
        <TextField
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
          color="primary"
          placeholder="Search here..."
          variant="outlined"
          InputProps={{
            style: {
              borderRadius: "15px",
            },
            endAdornment: (
              <IconButton>
                <SearchIcon sx={{ color: Colors.primary }} />
              </IconButton>
            ),
          }}
        />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 0px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts.length !== 0 ? (
          renderProducts
        ) : (
          <p> No Product Found </p>
        )}
      </Grid>
    </Container>
  );
}
