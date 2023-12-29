import React from "react";
import { Box, Typography } from "@mui/material";

const ServiceBox = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        width: { xs: "70vw", sm: "40vw", lg: "297px" }, // Adjusted width based on screen size
        height: "239px", // Adjust the height based on your design
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        backgroundColor:"#ffffff"
      }}
    >
      <Box>
        <img
          src={icon}
          alt=""
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover", // Maintain aspect ratio and cover the 24px square
          }}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "1rem", sm: "1.2rem", lg: "1.2rem" }, // Adjusted font size based on screen size
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontFamily: "Open Sans, sans-serif",
          fontSize: { xs: "12px", sm: "14px", lg: "14px" }, // Adjusted font size based on screen size
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ServiceBox;
