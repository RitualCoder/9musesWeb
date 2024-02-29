import { Box, Container, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import React from "react";

export default function HomePage() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <section>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "80vh",
            padding: 0,
          }}
        >
          <Box
            component={"img"}
            src="static/images/Accueil.jpeg"
            alt="Acceuil"
            sx={{ objectFit: "cover", width: "100%", height: "100%" }}
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
              <Typography variant="h3" color={"white"}>
                DECOUVREZ
              </Typography>
              <Typography variant="h3" color={"white"}>
                NOS AVENTURES
              </Typography>
            </Box>

            <IconButton
              size="large"
              sx={{ bgcolor: "#C0A179", m: 3, mt: 0 }}
              onClick={handleScrollToBottom}
            >
              <KeyboardArrowDownIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </section>

      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }} ref={bottomRef}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{ width: "100%", textAlign: "center", mt: 8 }}>
          <Typography color={"white"}>TEST</Typography>
        </Box>
      </section>
    </Box>
  );
}
