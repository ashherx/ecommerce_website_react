import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useState } from "react";

const messages = [
  "Get 20% off your first order.",
  "Shop our new arrivals today!",
  "Summer sale! Save up to 50% on select items.",
  "Free shipping on orders over $50.",
];

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer>
      <Slide direction={show ? "left" : "right"} in={show} timeout={{enter: 500, exit: 100}}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText >{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
