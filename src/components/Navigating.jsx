import { Box, Typography } from "@mui/material";
import React from "react";
import one from "../assets/navigating/one.png";
import two from "../assets/navigating/two.png";
import three from "../assets/navigating/three.png";
import four from "../assets/navigating/four.png";
import expert from "../assets/expert.png";
import NavigatingCard from "./NavigatingCard";
import zIndex from "@mui/material/styles/zIndex";

const Navigating = () => {
  const cardData = [
    {
      icon: one,
      title: "Market Trends Analysis",
      description: "Predictive insights to guide real estate strategies.",
    },
    {
      icon: two,
      title: "Targeted Buyer Persona",
      description: "Understand and connect with your ideal property buyers.",
    },

    {
      icon: three,
      title: "Competitor Insights",
      description:
        " Stand out in the property market with informed strategies.",
    },
    {
      icon: four,
      title: "Visual Content Appeal",
      description:
        "Captivate buyers with appealing visuals and immersive experiences.",
    },
  ];
  return (
    <Box
      className={"container"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "2rem", md: "3rem" },
        marginTop:"8rem"
      }}
    >
      <Box
        className={"text-container"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "2rem", md: "5rem" },
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1rem", md: "2rem" },
            fontWeight: 700,
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
            color:"#000C1A"
          }}
        >
          Navigating Real Estate's Digital Landscape
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.5 rem" },
            fontWeight: 400,
            // fontWeight: "bold",
            fontFamily: "Open Sans, sans-serif",
            color:"#333333"
          }}
        >
          Insights for Real Estate Marketing Advantage{" "}
        </Typography>
      </Box>
      <Box
        className={"content-container"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: { xs: "90vw", md: "85vw" },
          position: "relative",
        }}
      >
        <Box
          className="card-container"
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            gap: { xs: "1rem", md: "2rem" },
            marginY: "3rem",
          }}
        >
          {cardData.map((card, index) => (
            <NavigatingCard key={index} {...card} />
          ))}
        </Box>
        <Box
          className={"image"}
          sx={{
            width: { xs: "100%", md: "55%" },
            flex: "1",
            marginX: { xs: "0", md: "-5rem" },
            overflow: "hidden",
            zIndex: "-100",
          }}
        >
          <img src={expert} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navigating;
