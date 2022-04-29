import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Footer = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        border: 1,
        borderColor: "primary.dark",
        borderRadius: "4px",
        backgroundColor: "primary.dark",
      }}
    >
      <Typography variant="body1" align="justify" component={"span"}>
        Created by: Alejandro Ochoa
        <p />
        Special thanks to: Cesar Romero
        <p />
        Project created during Wizeline Academy React Testing Bootcamp
      </Typography>
    </Box>
  );
};
