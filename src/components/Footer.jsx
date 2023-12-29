import { Box, Typography } from "@mui/material";
import React from "react";
import osumareLogo from "../assets/logo.png";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink } from "react-router-dom";
import X from "../assets/socials/X_1.png";
import facebook from "../assets/socials/facebook.png";
import youtube from "../assets/socials/youtube.png";
import whatsapp from "../assets/socials/whatsapp.png";
import pinterest from "../assets/socials/pinterest.png";
import insta from "../assets/socials/insta.png";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "3rem",
        marginBottom:"4rem"
        // padding: { xs: "2rem", md: "4rem" },
      }}
    >
      <Box
        className="content-container"
        sx={{
          width: { xs: "70vw", md: "80vw" },
          borderRadius: "32px",
          height: "auto",
          background:
            "linear-gradient(261.57deg, rgba(0, 111, 237, 0.12) 18.01%, rgba(179, 214, 255, 0.12) 90.03%)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          padding: { xs: "2rem", md: "4rem" },
          gap:{xs:"6rem"}
        }}
      >
        <Box
          className="contact"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: { xs: "100%", md: "25vw" },
            gap: "2rem",
          }}
        >
          <Box
            className="logo"
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div>
              <img
                src={osumareLogo}
                alt="Osumare Logo"
                style={{
                  maxWidth: "100%",
                  height: "13vh",
                  display: "block",
                }}
              />
            </div>
          </Box>
          <Box className="info">
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </Typography>
          </Box>
          <Box
            className="address"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "2rem",
                fontWeight: 800,
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Open Sans, sans-serif",
                width:{xs:"70vw", md:"20vw"}
              }}
            >
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </Typography>
          </Box>
          <Box
            className="contact-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "80%",
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "2rem",
                fontWeight: 800,
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ display: "flex", gap: ".5rem" }}>
                <MailIcon />
                <Typography sx={{}}>hello@osumare.in</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: ".5rem" }}>
                <PhoneIcon />
                <Typography sx={{}}>+91 8459 8762 26</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="menu"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {xs:"flex-start",md:"center"},
            justifyContent: "flex-start",
            width: { xs: "100%", md: "25vw" },
            gap: "2rem",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "2rem",
              fontWeight: 800,
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Menu
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                color:"#333333"
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                color:"#333333"
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                color:"#333333"
              }}
            >
              Services
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                color:"#333333"
              }}
            >
              Work
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                color:"#333333"
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                color:"#333333"
              }}
            >
              Carrer
            </Typography>
          </Box>
        </Box>
        <Box
          className="socials"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: { xs: "100%", md: "25vw" },
            gap: "4rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 800,
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Social
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Box>
                <a href="">
                  <img
                    src={X}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "32px",
                    }}
                  />
                </a>
              </Box>
              <Box>
                <a href="">
                  <img
                    src={facebook}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "32px",
                    }}
                  />
                </a>
              </Box>
              <Box>
                <a href="">
                  <img
                    src={youtube}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "32px",
                    }}
                  />
                </a>
              </Box>
              <Box>
                <a href="">
                  <img
                    src={pinterest}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "32px",
                    }}
                  />
                </a>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Box>
                <a href="">
                  <img
                    src={whatsapp}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "32px",
                    }}
                  />
                </a>
              </Box>
              <Box>
                <a href="">
                  <img
                    src={insta}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "32px",
                    }}
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            fontFamily: "Montserrat, sans-serif",
            color:"#000C1A"
          }}
        >
          © 2023 Osumare. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
