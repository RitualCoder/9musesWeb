import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  backgroundColor: "black",
  width: 368,
  height: 421,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const Container2 = styled(Box)({
  border: "2px solid #C0A179",
  width: 338,
  height: 472,
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  alignItems: "center",
});

const Image = styled("img")({
  width: 368,
  height: 263,
  marginTop: "-15px",
});

const Title = styled(Typography)({
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "10px",
  marginTop: "17px",
  color: "white",
});

const Subtitle = styled(Typography)({
  fontSize: "14px",
  textAlign: "center",
  color: "white",
});

const StyledButton = styled(Button)({
  width: "181px",
  height: "46px",
  textAlign: "center",
  color: "white",
  marginTop: "-23px",
  backgroundColor: "#C0A179",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "white",
    color: "#C0A179",
  },
});

function BoxAdventure() {
  return (
    <Container>
      <Container2>
        <Image src="/components/photo1.jpeg" alt="" />
        <Title variant="h1">BOX DÉCOUVERTE</Title>
        <Subtitle variant="h3">une aventure en duo</Subtitle>
      </Container2>

      <StyledButton variant="contained">DÉCOUVRIR LA BOX</StyledButton>
    </Container>
  );
}

export default BoxAdventure;
