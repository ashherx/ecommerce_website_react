import { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "./styles/theme";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import ProductsAll from "./components/productsAll";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BannerContainer, BannerContent, BannerImage } from "./styles/banner";
import Cart from "./components/cart";

function App() {
  useEffect(() => {
    document.title = "Ecommerce App";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          <Navbar />
        </Container>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container
                  maxWidth="xl"
                  sx={{ background: "#fff", marginBottom: "1rem" }}
                >
                  <Banner
                    img={"/images/banner/banner.png"}
                    title={"NEW BAGS"}
                  />
                  <Promotions />
                  <Box display={"flex"} justifyContent={"center"} sx={{ p: 4 }}>
                    <Typography variant="h4" color="primary">
                      Best Sellers
                    </Typography>
                  </Box>
                  <Products />
                </Container>
              </>
            }
          />

          <Route
            path="catalog"
            element={
              <>
                <Container
                  maxWidth="xl"
                  sx={{ background: "#fff", marginBottom: "1rem" }}
                >
                  <Banner
                    img={"/images/banner/catalog2.png"}
                    title={"CATALOG"}
                    subtitle={false}
                    desc={false}
                    btn={false}
                  />
                  <Box mt={4}>
                    <ProductsAll />
                  </Box>
                </Container>
              </>
            }
          />

          <Route
            path="cart"
            element={
              <>
                <Container
                  maxWidth="xl"
                  sx={{ background: "#fff", marginBottom: "1rem" }}
                >
                  <Banner
                    img={"/images/banner/cart.png"}
                    title={"YOUR CART"}
                    subtitle={false}
                    desc={false}
                    btn={false}
                  />
                  <Box mt={4}>
                    <Cart />
                  </Box>
                </Container>
              </>
            }
          />

          <Route
            path="about"
            element={
              <Container sx={{justifyContent: "center", display: "flex", marginBottom: 5}}>
                <img src="/images/banner/soon.svg" />
              </Container>
            }
          />

          <Route
            path="contact"
            element={
              <Container sx={{justifyContent: "center", display: "flex", marginBottom: 5}}>
                <img src="/images/banner/soon.svg" />
              </Container>
            }
          />

          <Route
            path="*"
            element={
              <Container sx={{justifyContent: "center", display: "flex", marginBottom: 5}}>
                <img src="/images/banner/error.svg" />
              </Container>
            }
          />
        </Routes>

        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
