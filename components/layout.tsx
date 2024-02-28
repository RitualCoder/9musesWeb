import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import EdenIcon from "./icons/edenIcon";

interface AppBarAndDrawerProps {
  children: ReactNode;
}
export default function Layout({ children }: AppBarAndDrawerProps) {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <EdenIcon size={32} />
      </Box>
      {children}
    </Container>
  );
}
