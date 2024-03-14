import React from "react";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface LinkProps {
  url: string;
  text?: string;
  icon?: any;
}

const CustomLink: React.FC<LinkProps> = ({ url, text, icon }) => {
  return (
    <Link href={url}>
      {icon && icon}
      {text && (
        <Button
          sx={{
            fontSize: 16,
            fontWeight: 500,
            "&:hover": { bgcolor: "transparent" },
          }}
          disableRipple
        >
          <Typography
            sx={{
              "&:hover": { fontWeight: 900 },
            }}
          >
            {text}
          </Typography>
        </Button>
      )}
    </Link>
  );
};

export default CustomLink;
