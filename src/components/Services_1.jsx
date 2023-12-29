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
        padding: "81px 20px", // Adjust padding for smaller screens
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box
        className={"content"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem", // Reduce gap for smaller screens
        }}
      >
        <Box
          className={"text"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"} // Reduce gap for smaller screens
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "2rem",
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Our Service Offerings
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "1rem", // Adjust font size for smaller screens
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Strategies that Drive Property Market Excellence
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem", // Reduce gap for smaller screens
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem", // Reduce gap for smaller screens
              width: "100%", // Take 100% width of the container
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
              height: "7vh",
              width: "15vw",
              fontSize: "1rem", // Adjust font size for smaller screens
              "&:hover": {
                backgroundColor: "blue",
                border: "1px solid blue",
                color: "white",
              },
              "&:active": {
                backgroundColor: "blue",
                border: "1px solid blue",
                color: "white",
              },
            }}
          >
            Get Started
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Services;
