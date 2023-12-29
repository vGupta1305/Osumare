import { Box, Button, Typography } from "@mui/material";
import React from "react";
import building from "../assets/building.png";
import headerImage from "../assets/header-image.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${building})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // padding: "0 20px",
        position: "relative",
        width:"100vw"
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          width: "776px",
          height: "776px",
          top: "25.63px",
          left: "959.8px",
          opacity: "0.14",
          transform: "rotate(-140.53deg)", // Use 'rotate' instead of 'deg'
          background: `linear-gradient( #FFFFFF, #80BBFF)`,
          position: "absolute",
          borderRadius: "50%",
        }}
      ></Box>
      <Box
        sx={{
          zIndex: 4,
          display: "flex",
          flexDirection: "column ",
          width: { lg: "60vw", md: "75vw", xs: "90vw", sm: "90vw" },
          gap: "2rem",
          height: { lg: "40vh", sm: "40vh" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Box
            fontWeight={500}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            textAlign={"center"}
          >
            Elevate{" "}
            <span style={{ color: "#0078FF", fontWeight: 700 }}>
              Real Estate Success
            </span>{" "}
            with Osumare's Digital Expertise
          </Box>
          <Box
            textAlign={"center"}
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: 400,
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </Box>
        </Box>
        <NavLink>
          <Button
            sx={{
              borderRadius: "32px",
              height: "56px",
              width: { lg: "408px", md: "408px", sm: "50vw" },
              backgroundColor: "#0078F0",
              border: "3px solid #0078FF",
              color: "white",
              fontSizeAdjust: "1.5rem",
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.5rem", md: "large" },
              textTransform: "none",
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
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1rem", md: "24px" },
              }}
            >
              Get Started
            </Typography>
          </Button>
        </NavLink>
      </Box>

      {
        <Box
          className={"image-section"}
          sx={{
            width: "100%",
            height: "auto",
            top: "659px",
            display: "flex",
            // left:"222px",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <img
            src={headerImage}
            alt="Header"
            style={{
              width: "50%", // Ensure the image doesn't exceed the width of its container
              height: "auto",
            }}
          />
        </Box>
      }
    </Box>
  );
};

export default Header;
