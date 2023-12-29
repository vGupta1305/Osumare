import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import arrowImage from "../assets/arrow.png";

const Introduction = () => {
  return (
    <Box
      className={"container"}
      sx={{
        width: "100vw",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        padding: "2rem",
        marginBottom: "200px",
        marginTop:{xs:'0px',sm:"0px",md:"600px"}
      }}
    >
      <Typography
        className="title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          textAlign: { xs: "left", md: "center" },
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          color: "#000C1A",
        }}
      >
        {" "}
        Real Estate-Focused Digital Mastery{" "}
      </Typography>
      <Box
        className={"content-container"}
        width={"85%"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box
          className={"image-container"}
          flex={1}
          sx={{ textAlign: "center", marginBottom: { xs: "2rem", md: 0 } }}
        >
          <img src={arrowImage} alt="" style={{ maxWidth: "100%" }} />
        </Box>
        <Box
          className={"text-container"}
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingLeft: { xs: 0, md: 0 }, // Adjusted padding for smaller screens
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              color: "#000C1A",
            }}
          >
            Unlock the Potential of Digital Real Estate Excellence
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: 400,
              fontFamily: "Open Sans, sans-serif",
              color: "#333333",
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

export default Introduction;
