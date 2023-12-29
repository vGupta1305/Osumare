import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import houseImage from "../assets/house.png";

const Introduction_2 = () => {
  return (
    <Box
      className={"container"}
      sx={{
        width: "100%",
        height: "90vh",
        marginTop: "8rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className={"text-container"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "2rem", md: "5rem" }, // Adjust margin for different screen sizes
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" }, // Adjust font size for different screen sizes
            fontWeight: 700,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Driving Property Inquiries to Conversions
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.5rem" }, // Adjust font size for different screen sizes
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Streamlined Strategies for Real Estate Success{" "}
        </Typography>
      </Box>
      <Box
        className={"content-container"}
        width={"90vw"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box
          className={"image-container"}
          sx={{
            flex: { xs: "auto", md: 0.45 },
            paddingLeft: { xs: 0, md: "2rem" },
          }}
        >
          <img
            src={houseImage}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          className={"content-text-container"}
          sx={{
            flex: { xs: "auto", md: 0.55 },
            padding:"2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" }, // Adjust font size for different screen sizes
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Unlock the Potential of Digital Real Estate Excellence
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" }, // Adjust font size for different screen sizes
              fontWeight: 400,
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </Typography>
          <NavLink>
          <Button
            sx={{
              borderRadius: "32px",
              height: "61px",
              width: { lg: "233px", md: "233px", sm: "50vw" },
              backgroundColor: "#0078F0",
              border: "3px solid #0078FF",
              color: "white",
              fontSizeAdjust: "1.5rem",
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.5rem", md: "large" },
              textTransform: "none",
              padding: "13px, 136px, 13px, 136px",
              gap: "4px",
              "&:hover": {
                border: "1px solid blue",
                color: "white",
                backgroundColor: "blue",
              },
              "&:active": {
                backgroundColor: "blue",
                border: "1px solid blue",
                color: "white",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1rem", md: "18px" },
              }}
            >
              Get Started
            </Typography>
          </Button> 
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction_2;
