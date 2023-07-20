import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  BannerShopButton,
} from "../../styles/banner";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export default function Banner({
  img,
  title,
  desc = true,
  subtitle = true,
  btn = true,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate()

  return (
    <BannerContainer title={title}>
      <BannerImage src={img} />
      <BannerContent>
        {subtitle && <Typography variant="h6"> HUGE CLLECTION</Typography>}

        <BannerTitle variant="h2" color="primary">
          {title}
        </BannerTitle>

        {desc && (
          <BannerDescription variant="subtitle">
            In aliquip consequat laboris mollit qui tempor. Reprehenderit dolor
            consequat do ullamco mollit et. Et aliquip adipisicing duis
            adipisicing incididunt ex non aute non nulla deserunt aute laborum.
            Occaecat eu consectetur id amet enim veniam aute est.
          </BannerDescription>
        )}

        {btn && (
          <Button
            variant="contained"
            sx={{
              p: 2,
              borderRadius: "15px",
              "&:hover": { bgcolor: lighten(0.05, Colors.primary) },
              width: "100%",
            }}
            onClick={() => navigate("/catalog")}
          >
            SHOP NOW
          </Button>
        )}
      </BannerContent>
    </BannerContainer>
  );
}
