import { Box } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "./header";

interface AppBarAndDrawerProps {
  children: ReactNode;
}
export default function Layout({ children }: AppBarAndDrawerProps) {
  return (
    <Box>
      <NavBar />

      {children}
    </Box>
  );
}
