import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import review_person from "../assets/review_person.png";
import review_icon from "../assets/review_icon.png";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
const Review = () => {
  const cardData = [
    {
      image: review_person,
      name: "Tabish Khan",
      content:
        "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.",
    },
    {
      image: review_person,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo ac justo sodales, in aliquet elit tincidunt. Sed malesuada tellus vel luctus cursus.",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const currentCardData = cardData[currentCard];

  return (
    <Box
      className={"container"}
      sx={{
        background: "#F9F9F9",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
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
          marginTop: "5rem",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 700,
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Driving Property Inquiries to Conversions
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: 400,
            // fontWeight: "bold",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Streamlined Strategies for Real Estate Success{" "}
        </Typography>
      </Box>

      <Box
        className={"content-container"}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "80vw",
          height: "80vh",
        }}
      >
        <Box
          className="card-container"
          sx={{
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #EFEFEF",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            textAlign: "center",
            width: "100%",
            height: "85%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              background: "#ffffff",
              padding: "20px",
              textAlign: "center",
              width: "90%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Box
              className={"image-container"}
              sx={{ flex: 0.65, borderRadius: "100px", position: "relative" }}
            >
              <img src={currentCardData.image} alt="" />

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  scale: "2",
                }}
              >
                <PlayCircleFilledWhiteRoundedIcon />
              </Box>
            </Box>
            <Box
              sx={{
                flex: 0.35,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <Box
                className="header"
                sx={{ width: "90%" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                margin={"0 auto"}
              >
                <Box className="profile" sx={{ display: "flex", gap: "1rem" }}>
                  <Box
                    className="profile-image"
                    sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                  >
                    <img
                      src={currentCardData.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>

                  <Box
                    className="name"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                      }}
                    >
                      {currentCardData.name}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="review-icon"
                  sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                >
                  <img
                    src={review_icon}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              </Box>
              <Box className="content">
                <Typography>{currentCardData.content}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={handlePrev} disabled={currentCard === 0}>
          &lt; Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentCard === cardData.length - 1}
        >
          Next &gt;
        </button>
      </Box>
    </Box>
  );
};

export default Review;
