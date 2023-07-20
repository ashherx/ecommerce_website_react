import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import { FooterTitle, SubscribeTextField } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  const listItems = [
    "About Us",
    "Order Tracking",
    "Privacy & Policy",
    "Terms & Condition",
  ];
  const listItems2 = ["Login", "My cart", "My account", "My wishlist"];
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
        borderRadius: "20px 20px 0px 0px",
      }}
    >
      <Grid container spacing={2} justifyContent={"space-evenly"}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>

          <Typography variant="caption2">
            Sit in aliquip ipsum in consequat aute nulla veniam. Occaecat
            consequat aliqua culpa ex amet sit excepteur. Consectetur qui sint
            in ad labore id ut. Veniam esse officia qui aliquip laboris
            exercitation reprehenderit aute ex anim. Sint non nulla eu aliqua
            occaecat do voluptate.
          </Typography>
          <Box
            sx={{
              mt: 2,
              color: Colors.dove_gray,
              display: "flex",
              justifyContent: {md: "left", xs: "center"},
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          {/* <List> */}
          {listItems.map((item) => (
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {item}
              </Typography>
            </ListItemText>
          ))}
          {/* </List> */}
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          {/* <List> */}
          {listItems2.map((item) => (
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {item}
              </Typography>
            </ListItemText>
          ))}
          {/* </List> */}
        </Grid>
        
        <Grid item md={6} lg={4} sm={6} xs={12}>
          <FooterTitle variant="body1">Newsletter</FooterTitle>
          <Stack>
            <SubscribeTextField
              color="alt"
              label="Email address"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SendIcon sx={{ color: Colors.white }} />
                  </IconButton>
                ),
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
