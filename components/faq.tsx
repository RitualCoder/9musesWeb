import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = ({ data }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {data.title}
      </Typography>
      {data.rows.map((row, index) => (
        <Accordion key={index} sx={{ bgcolor: "black", mb: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            sx={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <Typography variant="h5" fontSize={20}>
              {row.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography sx={{ color: "#A9A6AA" }}>{row.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
