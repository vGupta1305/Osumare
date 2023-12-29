import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import review_person from "../assets/review_person.png";
import review_person_dp from "../assets/review_person_dp.png";
import review_icon from "../assets/review_icon.png";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import ArrowBackIcon from "../assets/prev.png";
import ArrowForwardIcon from "../assets/next.png";

const Review = () => {
  const cardData = [
    {
      image: review_person,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo ac justo sodales, in aliquet elit tincidunt. Sed malesuada tellus vel luctus cursus.",
    },
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
        gap: "2rem",
      }}
    >
      <Box
        className={"text-container"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "7rem",
          marginBottom:"3rem",
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
          What Our Pharma Partners Say
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
          Driving Transformations, One Brand at a Time{" "}
        </Typography>
      </Box>
      {/* 
      <Box
        className={"content-container"}
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "90vw", sm: "80vw" },
          height: "80vh",
        }}
      > */}
      <Box
        className="card-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #EFEFEF",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          width: { xs: "90vw", sm: "75vw" },
          height: "80vh",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            background: "#ffffff",
            textAlign: "center",
            width: { xs: "100%", sm: "90%" },
            height: "80%",
            display: "flex",
            flexDirection: { xs: "column", md: "column",lg:"row" },
            justifyContent: "center",
            alignItems: "center",
            gap: {lg:"1.5rem",md:"3rem",sm:"5rem"}
          }}
        >
          <Box
            className={"image-container"}
            sx={{
              flex: { xs: "1", sm: "0.6" },
              borderRadius: { xs: "50%", sm: "16px" },
              position: "relative",
              width: { xs: "100%", sm: "80%" },
              marginBottom: { xs: "1rem", sm: 0 },
              // paddingY:{xs:"2rem",md:"7rem"}
            }}
          >
            <img
              src={currentCardData.image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "32px",
              }}
            />

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
              flex: { xs: "1", sm: "0.4" },
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: { xs: "100%", sm: "80%" },
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
                  sx={{ width: "80px", height: "80px", borderRadius: "50%" }}
                >
                  <img
                    src={review_person_dp}
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
                    
                  }}
                />
              </Box>
            </Box>
            <Box className="content">
              <Typography
                sx={{
                  fontWeight: 400,
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                }}
              >
                {currentCardData.content}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
      <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <img
          src={ArrowBackIcon}
          alt="Previous"
          onClick={handlePrev}
          style={{
            cursor: "pointer",
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "32px",
            display: currentCard === 0 ? "none" : "block",
          }}
        />
        <img
          src={ArrowForwardIcon}
          alt="Next"
          onClick={handleNext}
          style={{
            cursor: "pointer",
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "32px",
            display: currentCard === cardData.length - 1 ? "none" : "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Review;
