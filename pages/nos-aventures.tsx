import React, { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { data } from "lib/dataFAQ";
import FAQ from "@/components/faq";
import theme from "@/lib/themes/themeMui";
import BoxAventure from "@/components/BoxAventure";
import { Margin } from "@mui/icons-material";
import { ButtonComponent } from "@/components/button";
import StoreButton from "@/components/storeButton";
import CustomCard from "@/components/customCard";

export default function NosAventures() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "380px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <section>
        <Box sx={{ position: "relative", height: "55vh", overflow: "hidden", width: "100%", p: "10px" }}>
          <Box
            component={"img"}
            src="images/NosAventures.png"
            alt="Image nos aventures"
            sx={{
              width: { xs: "180%", md: "100%" },
              overflow: { xs: "hidden", md: "visible" },
              transform: { md: "translateY(-15%)", xs: "translateX(-20%)" },
              justifyContent: "center",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: "50%", // Centre horizontalement
              transform: "translateX(-50%)", // Déplace le conteneur de moitié de sa largeur vers la gauche pour le centrer
              bottom: { xs: 70, md: 50 },
              textAlign: "center",
              mb: 10,
            }}
          >
            <Box sx={{ ml: { xs: 3, md: 3 } }}>
              <Typography variant="h1" color="white" fontFamily="Avander" sx={{ fontSize: { xs: 30, md: 60 } }}>
                NOS AVENTURES
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box ref={bottomRef} />
      </section>

      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IconButton
            size="large"
            sx={{
              bgcolor: "#C0A179",
              mt: -2,
              "&:hover": { backgroundColor: "#AE925B" },
            }}
            onClick={handleScrollToBottom}
          >
            <KeyboardArrowDownIcon color="primary" />
          </IconButton>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            pt: { md: 12, xs: 5 },
            maxWidth: "md",
            alignItems: "center",
            px: { xs: 5, md: 10 },
          }}
        >
          <Typography
            color={"white"}
            variant="h5"
            sx={{ color: "white", fontSize: { xs: 28, md: 38 }, mb: 2, fontWeight: 700 }}
          >
            LES AVENTURES EDEN
          </Typography>
          <Typography color={"white"} fontSize={16} mb={12}>
            Découvrez toutes les box
          </Typography>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            "& > *:not(:last-child)": {
              marginRight: 10,
              marginBottom: 15, // Ajoute une marge de 10px à droite de chaque composant sauf le dernier
            },
          }}
        >
          <BoxAventure
            title={"BOX DÉCOUVERTE"}
            subtitle={"une aventure en duo"}
            imageSrc={"/images/asset4.jpeg"}
            imageAlt={"couple"}
          />
          <BoxAventure
            title={"BOX SENSUEL"}
            subtitle={"une aventure sensuelle en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bisou dans le cou"}
          />
          <BoxAventure
            title={"ALL INCLUSIVE"}
            subtitle={"une aventure personalisée en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bouton de manche"}
          />
        </Box>

        <Box
          sx={{
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            "& > *:not(:last-child)": {
              marginRight: 0,
              marginBottom: 15, // Ajoute une marge de 10px à droite de chaque composant sauf le dernier
            },
          }}
        >
          <BoxAventure
            title={"BOX DÉCOUVERTE"}
            subtitle={"une aventure en duo"}
            imageSrc={"/images/asset4.jpeg"}
            imageAlt={"couple"}
          />
          <BoxAventure
            title={"BOX SENSUEL"}
            subtitle={"une aventure sensuelle en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bisou dans le cou"}
          />
          <BoxAventure
            title={"ALL INCLUSIVE"}
            subtitle={"une aventure personalisée en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bouton de manche"}
          />
        </Box>

        <Box
          sx={{
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            "& > *:not(:last-child)": {
              marginRight: 10,
              marginBottom: 15, // Ajoute une marge de 10px à droite de chaque composant sauf le dernier
            },
          }}
        >
          <BoxAventure
            title={"BOX DÉCOUVERTE"}
            subtitle={"une aventure en duo"}
            imageSrc={"/images/asset4.jpeg"}
            imageAlt={"couple"}
          />
          <BoxAventure
            title={"BOX SENSUEL"}
            subtitle={"une aventure sensuelle en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bisou dans le cou"}
          />
          <BoxAventure
            title={"ALL INCLUSIVE"}
            subtitle={"une aventure personalisée en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bouton de manche"}
          />
        </Box>

        <Box
          sx={{
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            "& > *:not(:last-child)": {
              marginRight: 10,
              marginBottom: 15,
            },
          }}
        >
          <BoxAventure
            title={"BOX DÉCOUVERTE"}
            subtitle={"une aventure en duo"}
            imageSrc={"/images/asset4.jpeg"}
            imageAlt={"couple"}
          />
          <BoxAventure
            title={"BOX SENSUEL"}
            subtitle={"une aventure sensuelle en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bisou dans le cou"}
          />
          <BoxAventure
            title={"ALL INCLUSIVE"}
            subtitle={"une aventure personalisée en duo"}
            imageSrc={"/images/asset6.jpeg"}
            imageAlt={"bouton de manchette"}
          />
        </Box>
      </section>
      <Box
        sx={{
          width: "100vw",
          height: "300px",
          position: "relative",
          bgcolor: "#c0a179",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 15, md: 32 },
            mt: 7,
            ml: { xs: 3, md: 3 },
            mr: { xs: 3, md: 3 },

            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            lineHeight: { xs: 2, md: 2 },
          }}
        >
          “Lorem ipsum dolor sit amet consectetur. Habitasse <br></br> malesuada adipiscing pulvinar et lacus cras massa
          quam.”
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 25 },
            mt: 5,
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          EDEN
        </Typography>
      </Box>
    </Box>
  );
}
