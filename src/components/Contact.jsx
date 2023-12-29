import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: "5rem", md: "8rem" },
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        position: "relative",
        marginY: "10rem",
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          width: "776px",
          height: "776px",
          top: "216.63px",
          left: "-108px",
          opacity: "0.14",
          transform: "rotate(140.53deg)", // Use 'rotate' instead of 'deg'
          background: `linear-gradient( #FFFFFF, #80BBFF)`,
          position: "absolute",
          borderRadius: "40%",
        }}
      ></Box>

      <Box
        sx={{
          zIndex: -1,
          width: "776px",
          height: "776px",
          top: "125.63px",
          right: "-59.8px",
          opacity: "0.14",
          transform: "rotate(-140.53deg)", // Use 'rotate' instead of 'deg'
          background: `linear-gradient( #FFFFFF, #FF725E)`,
          position: "absolute",
          borderRadius: "50%",
        }}
      ></Box>

      {/* Background Box with Opacity
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(to right, #409AFF, #FF725E)`,
          opacity: 0.14,
          zIndex: -1,
          borderRadius: "16px", // Set the same border radius as the form container
        }}
      /> */}

      {/* Text Container */}
      <Box
        className={"text-container"}
        sx={{
          display: "flex",
          zIndex:1000,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "2rem", md: "5rem" },
          gap: "1rem",
          width: { xs: "90%", md: "60%" },
          zIndex: 1, // Set zIndex to 1 to appear on top of the background
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2rem" },
            fontWeight: 800,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Connect with Our Digital Marketing Experts
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
            width: "80%",
          }}
        >
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
          Elevate Your Online Presence Together
        </Typography>
      </Box>

      <Box
        className="form-container"
        sx={{
          width: { xs: "75%", md: "50vw" },
          borderRadius: "16px",
          border: "1px solid #EFEFEF",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: { xs: "2rem", md: "3rem" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          gap: "3rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1rem", md: "2rem" },
          }}
        >
          <Box sx={{ flex: 1, marginBottom: { xs: "1rem", md: 0 } }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="dense"
              placeholder="Your Name"
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="dense"
              placeholder="Your Phone Number"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
              placeholder="Your Email Address"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={7}
              margin="dense"
              placeholder="Your Message"
            />
          </Box>
        </Box>
        {/* You can add a submit button or handle form submission here */}
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
    </Box>
  );
};

export default Contact;
