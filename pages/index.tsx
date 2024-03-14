import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import React from "react";
import { ButtonComponent } from "@/components/button";
import StoreButton from "@/components/storeButton";
import { data } from "lib/dataFAQ";
import FAQ from "@/components/faq";
import CustomCard from "@/components/customCard";

export default function HomePage() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <section>
        <Box sx={{ position: "relative", height: "80vh", overflow: "hidden" }}>
          <Box
            component={"img"}
            src="images/Accueil.jpeg"
            alt="Image acceuil"
            sx={{
              width: "100%",
              transform: "translateY(-15%)",
              minWidth: "800px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: 30,
              bottom: 50,
              textAlign: "right",
            }}
          >
            <Box m={3}>
              <Typography variant="h1" color={"white"} fontFamily={"Avander"}>
                DECOUVREZ
              </Typography>
              <Typography variant="h1" color={"white"} fontFamily={"Avander"}>
                NOS AVENTURES
              </Typography>
            </Box>

            <IconButton
              size="large"
              sx={{ bgcolor: "#C0A179", m: 3, mt: 0, "&:hover": { backgroundColor: "#AE925B" } }}
              onClick={handleScrollToBottom}
            >
              <KeyboardArrowDownIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      </section>

      <section>
        <Box sx={{ textAlign: "center", pt: 15, maxWidth: "md", alignItems: "center", px: 10 }} ref={bottomRef}>
          <Typography color={"white"} variant="h5" fontSize={38} mb={2}>
            EDEN C&apos;EST QUOI ?
          </Typography>
          <Typography color={"white"} fontSize={16}>
            Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget quis auctor tortor lectus leo malesuada.
            Dignissim malesuada hendrerit amet bibendum fusce. Laoreet ut dui et consequat cursus. Augue vestibulum
            euismod sit elit metus. Quisque lorem odio turpis aliquam sit rhoncus. Sed sit duis neque lectus sagittis
            sem ornare massa. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Nec
            vestibulum eget. Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget. Lorem ipsum dolor sit lorem
            ipsum dolo.
          </Typography>
          <ButtonComponent url={"/"} text={"NOTRE CONCEPT"} sx={{ mt: 5 }} />
        </Box>
      </section>

      <section>
        <Box sx={{ display: "flex", maxWidth: "md", px: 10, mt: 20, alignItems: "center", gap: 10 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Typography color={"white"} variant="h5">
              EDEN NE FAITE PLUS QU&apos;UN AVEC VOTRE MOITIÉ
            </Typography>
            <Typography color={"white"} fontSize={16}>
              Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget quis auctor tortor lectus leo malesuada.
              Dignissim malesuada hendrerit amet bibendum fusce. Lorem ipsum dolor sit amet consectetur. Nec vestibulum
              eget quis auctor tortor lectus leo malesuada. Dignissim malesuada hendrerit amet bibendum fusce. Dignissim
              malesuada hendrerit amet.
            </Typography>

            <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
              <StoreButton platform="ios" />
              <StoreButton platform="android" />
            </Box>
          </Box>
          <Box component={"img"} src="images/iPhonePicture.png" sx={{ height: "60vh" }} />
        </Box>
      </section>

      <section>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", maxWidth: "md", mt: 15, alignItems: "center", gap: 10, mb: 3 }}>
            <CustomCard
              imageSrc={"images/Asset1.jpeg"}
              title={"DES AVENTURES PERSONNALISÉES"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget quis auctor tortor lectus leo malesuada. Dignissim malesuada hendrerit amet bibendum fusce. Lorem ipsum dolor sit amet consectetur."
              }
              buttonText={"+"}
            />
            <CustomCard
              imageSrc={"images/Asset2.png"}
              title={"FAIRE QUELQUE CHOSE POUR L'AUTRE"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget quis auctor tortor lectus leo malesuada. Dignissim malesuada hendrerit amet bibendum fusce. Lorem ipsum dolor sit amet consectetur."
              }
              buttonText={"+"}
            />
            <CustomCard
              imageSrc={"images/Asset3.png"}
              title={"RAVIVER OU ATTISER LE DÉSIR"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Nec vestibulum eget quis auctor tortor lectus leo malesuada. Dignissim malesuada hendrerit amet bibendum fusce. Lorem ipsum dolor sit amet consectetur."
              }
              buttonText={"+"}
            />
          </Box>
          <ButtonComponent url={"/"} text={"DÉCOUVREZ NOS OFFRES"} sx={{ mt: 5 }} />
        </Box>
      </section>

      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 15, maxWidth: "md" }}>
          <Typography color={"white"} variant="h2" fontSize={40} fontWeight={500}>
            FAQ
          </Typography>
          <FAQ data={data} />
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
            mt: 15,
            mb: 10,
            maxWidth: "md",
            gap: 2,
          }}
        >
          <Typography variant="h2" fontSize={40} color={"white"}>
            COMMENCER VOS AVENTURES DÈS MAINTENANT !
          </Typography>
          <Typography color={"white"} fontSize={16} mb={3}>
            Télécharger l&apos;application Eden
          </Typography>
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
            <StoreButton platform="ios" />
            <StoreButton platform="android" />
          </Box>
        </Box>
      </section>
    </Box>
  );
}
