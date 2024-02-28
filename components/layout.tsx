import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import EdenIcon from "./icons/edenIcon";

interface AppBarAndDrawerProps {
  children: ReactNode;
}
export default function Layout({ children }: AppBarAndDrawerProps) {
  return (
    <Box sx={{ display: "flex", backgroundColor: "black", m: 0 }}>
      <Box sx={{ width: "100%" }}>
        <EdenIcon></EdenIcon>
      </Box>
      {children}
    </Box>
  );
}
