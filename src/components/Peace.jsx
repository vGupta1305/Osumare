import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Peace = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "60vh",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >

<Box
        sx={{
          zIndex: -1,
          width: "776px",
          height: "776px",
          top: "-10px",
          left: "-108px",
          opacity: "0.24",
          transform: "rotate(140.53deg)", // Use 'rotate' instead of 'deg'
          background: `linear-gradient( #FFFFFF, #80BBFF)`,
          position: "absolute",
          borderRadius: "50%",
        }}
      ></Box>

      <Box
        sx={{
          zIndex: -1,
          width: "776px",
          height: "776px",
          top: "-10px",
          right: "-108px",
          opacity: "0.14",
          transform: "rotate(-140.53deg)", // Use 'rotate' instead of 'deg'
          background: `linear-gradient( #FFFFFF, #FF725E)`,
          position: "absolute",
          borderRadius: "50%",
        }}
      ></Box>
      {/* Background Box with Opacity */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(to right, #409AFF, #FF725E)`,
          opacity: 0.14,
          zIndex: 0,
        }}
      /> */}

      {/* Text Container Box */}
      <Box
        className={"text-container"}
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: { xs: "90%", sm: "70%", md: "50%" },
          textAlign: "center",
          // backgroundColor: "rgba(255, 255, 255, 1)",
          padding: { xs: "1rem", md: "2rem" },
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Peace Of Mind
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" }, 
            textAlign: "center",
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </Typography>
        <NavLink to="/your-link">
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
  );
};

export default Peace;
