import React from "react";
import FeatureBox from "./FeatureBox";
import one from "../assets/features/one.png";
import two from "../assets/features/two.png";
import three from "../assets/features/three.png";
import four from "../assets/features/four.png";
import five from "../assets/features/five.png";
import six from "../assets/features/six.png";
import seven from "../assets/features/seven.png";
import eight from "../assets/features/eight.png";
import { Box, Typography } from "@mui/material";

const Features = () => {
  const featuresData = [
    {
      icon: one,
      title: "Call-to-Action Optimization",
      description:
        "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    },
    {
      icon: two,
      title: "Landing Page Efficiency",
      description:
        "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
      icon: three,
      title: "Social Proof Utilization",
      description:
        "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action",
    },
    {
      icon: four,
      title: "Mobile Friendly Experience",
      description:
        "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
    },
    {
        icon: five,
        title: "Effective CTAs",
        description:
          " See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
      },
      {
        icon: six,
        title: "Conversion-Optimized Landing Pages",
        description:
          "Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
      },
      {
        icon: seven,
        title: "Trust Building with Social Proof",
        description:
          "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
      },
      {
        icon: eight,
        title: "Mobile-First Success",
        description:
          " Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
      },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: {xs:'25rem', md:"2rem"},
      }}
    >
      <Box
        sx={{
          width: { xs: "90vw", md: "80vw" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem" }, 
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Driving Property Inquiries to Conversions{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: "2rem",
            overflow: "hidden",
          }}
        >
          <Box
           sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "50%" },
            gap: "2rem",
          }} 
          >
            {featuresData.slice(0, 2).map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "50%" },
              gap: "2rem",
            }}
          >
            {featuresData.slice(2, 4).map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </Box>
        </Box>

        <Typography
          sx={{
            marginTop: { xs: "3rem", md: "3rem" },
            fontWeight: "700",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Our Expertise in Action{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: "2rem",
            overflow: "hidden",
          }}
        >
          <Box
             sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "50%" },
              gap: "2rem",
            }}
          >
            {featuresData.slice(4, 6).map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "50%" },
              gap: "2rem",
            }}
          >
            {featuresData.slice(6, 8).map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Features;
