import { Box, Container, Typography } from "@mui/material";
import BoxAdventure from "@/components/boxAdventure";

export default function Home() {
  return (
    <Container>
      <Typography variant="h1">Home</Typography>
      <BoxAdventure
        title={"BOX AVENTURE"}
        subtitle={"une aventure en duo"}
        imageSrc={"/public/photo1.jpeg"}
        imageAlt={"couple"}
      />
    </Container>
  );
}
