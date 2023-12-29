import React from "react";
import ServiceBox from "./ServiceBox";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import one from "../assets/services/one.png";
import two from "../assets/services/two.png";
import three from "../assets/services/three.png";
import four from "../assets/services/four.png";
import five from "../assets/services/five.png";
import six from "../assets/services/six.png";
import seven from "../assets/services/seven.png";
import eight from "../assets/services/eight.png";

const Services = () => {
  const servicesData = [
    {
      icon: one,
      title: "Automotive SEO",
      description:
        "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    },
    {
      icon: two,
      title: "PPC Precision",
      description:
        "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns",
    },

    {
      icon: three,
      title: "Social Acceleration",
      description:
        " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    },
    {
      icon: four,
      title: "Content Excellence",
      description:
        "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      icon: five,
      title: "Web Design",
      description:
        "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      icon: six,
      title: "Data-Driven Insights",
      description:
        "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      icon: seven,
      title: "End-to-End Solutions",
      description:
        "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      icon: eight,
      title: "Video marketing",
      description:
        "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    },
  ];

  return (
    <Box
      className={"container"}
      sx={{
        background: "#F9F9F9",
        width: "100vw",
        height: "auto",
        padding: { md: "81px 0", xs: "81px 0" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        className={"content"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "2rem", md: "5rem" },
        }}
      >
        <Box
          className={"text"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2rem"}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Our Service Offerings
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Strategies that Drive Property Market Excellence
          </Typography>
        </Box>
        <Box sx={{ padding: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "2rem", md: "2rem" }, // Add a gap of 1rem between rows
            }}
          >
            {servicesData.map((service, index) => (
              <ServiceBox key={index} {...service} />
            ))}
          </Box>
        </Box>

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
  );
};

export default Services;
