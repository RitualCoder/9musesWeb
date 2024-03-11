import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  backgroundColor: "black",
  width: 368,
  height: 421,
  zIndex: -10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const Container2 = styled(Box)({
  border: "2px solid #C0A179",
  width: 338,
  height: 382,
  zIndex: 10,
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  alignItems: "center",
});

const Container3 = styled(Box)({
  display: "flex",
  backgroundColor: "black",
  height: "46px",
  width: "270px",
  position: "relative",
  flexDirection: "column",
  marginTop: "105%",
  zIndex: 10,
  alignItems: "center",
});

const Image = styled("img")({
  width: 368,
  height: 263,
  zIndex: -10, // Modifier le z-index ici
  position: "relative",
  marginTop: "-15px",
});

const Title = styled(Typography)({
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "10px",
  marginTop: "25px",
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
  position: "fixed",
  color: "white",
  zIndex: 15,
  marginTop: "26.5%",
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
        <Image src="photo1.jpeg" alt="" />
        <Title variant="h1">BOX DÉCOUVERTE</Title>
        <Subtitle variant="h3">une aventure en duo</Subtitle>
      </Container2>
      <StyledButton variant="contained">DÉCOUVRIR LA BOX</StyledButton>
      <Container3></Container3>
    </Container>
  );
}

export default BoxAdventure;
