import React from "react";
import { Box, Typography } from "@mui/material";

const NavigatingCard = ({ icon, title, description }) => {
  return (
    <Box
      className={"card"}
      sx={{
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #EFEFEF",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        width: { lg: "35vw", md: "50vw", xs: "80vw" },
        height: "13vh", // Adjust the height based on your design
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: { xs: "1rem", md: "1.5rem" },
      }}
    >
      <Box>
        <img
          src={icon}
          alt=""
          style={{
            width: "65px",
            height: "65px",
            objectFit: "cover", // Maintain aspect ratio and cover the 24px square
          }}
        />
      </Box>
      <Box className={"card-content"} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            textAlign: "left",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontWeight: 400,
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default NavigatingCard;