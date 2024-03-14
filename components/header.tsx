import { Box } from "@mui/material";
import EdenIcon from "./icons/edenIcon";
import React from "react";
import { ButtonComponent } from "./button";
import CustomLink from "./link";

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
        px: 8,
        zIndex: 100,
        transition: "background-color 0.3s ease",
      }}
      onScroll={(e) => handleScroll(e)}
    >
      {/* Contenu à gauche */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <CustomLink url="/" icon={<EdenIcon size={55} />} />

        <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
          <CustomLink url="/contact" text="NOTRE CONCEPT" />

          <CustomLink url="/" text="NOS AVENTURES" />
        </Box>
      </Box>

      {/* Contenu à droite */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ButtonComponent url="/" text="Télécharger l'app" />
      </Box>
    </Box>
  );
}
