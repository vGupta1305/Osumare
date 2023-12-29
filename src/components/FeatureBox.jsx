import { Box,Typography } from "@mui/material";
import React from "react";

const FeatureBox = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        width: { xs: "80vw", md: "40vw" }, 
        height: "463px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <Box sx={{display:"flex" , alignItems:"center",justifyContent:"center" }} >
        <img
          src={icon}
          alt=""
          style={{
            width: "190px",
            height: "190px",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 400,
          fontFamily: "Open Sans, sans-serif",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureBox;
