import { Box, Button, Typography } from "@mui/material";
import EdenIcon from "./icons/edenIcon";
import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "transparent",
        height: "80px",
        mt: 1,
      }}
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
          <Button sx={{ color: "white", fontSize: 13 }}>NOTRE CONCEPT</Button>
        </Link>
        <Link href="/">
          <Button sx={{ color: "white", fontSize: 13 }}>NOS AVENTURES</Button>
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
        <Button
          variant="contained"
          sx={{ borderRadius: "0px", bgcolor: "#C0A179", height: "40px" }}
        >
          Télécharger l&apos;app
        </Button>
      </Box>
    </Box>
  );
}
