import { Box, Button, Typography } from "@mui/material";
import EdenIcon from "./icons/edenIcon";
import Link from "next/link";
import React from "react";
import { ButtonComponent } from "./button";

export default function NavBar() {
  const [displayBackgroundColor, setDisplayBackgroundColor] = React.useState(false);

  const handleScroll = (e: any) => {
    setDisplayBackgroundColor(window.scrollY > 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: displayBackgroundColor ? "rgba(0, 0, 0, 0.9)" : "transparent",
        height: "80px",
        py: 1,
        zIndex: 100,
        transition: "background-color 0.3s ease",
      }}
      onScroll={(e) => handleScroll(e)}
    >
      {/* Contenu à gauche */}
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: 25,
          alignItems: "center",
          gap: 1,
        }}
      >
        <Link href="/contact">
          <Button sx={{ fontSize: 16 }}>NOTRE CONCEPT</Button>
        </Link>
        <Link href="/">
          <Button sx={{ fontSize: 16 }}>NOS AVENTURES</Button>
        </Link>
      </Box>

      {/* Contenu au milieu */}
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: "calc(50% - 32px)",
          alignItems: "center",
        }}
      >
        <Link href={"/"}>
          <EdenIcon size={64} />
        </Link>
      </Box>

      {/* Contenu à droite */}
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          right: 25,
          alignItems: "center",
        }}
      >
        <ButtonComponent url="/" text="Télécharger l'app" />
      </Box>
    </Box>
  );
}
