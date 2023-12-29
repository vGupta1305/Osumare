import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import osumareLogo from "../assets/logo.png";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if(window.scrollY>50){
      setIsScrolled(true);
    }
    else{
      setIsScrolled(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    style={
      {
        width:"100%", 
        height:"108px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"8px 20px 0px 20px" ,// Adjusted padding on scroll
        position:"fixed",
        backgroundColor: isScrolled ? "transparent" : "rgba(255, 255, 255, 1)",
        backdropFilter: isScrolled? "blur(10px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 0 10px rgba(0, 0, 0, 0.1)" : "none",
        transition:"backdrop-filter 0.5s ease",
        zIndex: 1000
      }
    }
    >
      <div>
        <img
          src={osumareLogo}
          alt="Osumare Logo"
          style={{
            maxWidth: "100%",
            height: "13vh", // Adjusted height on scroll
            display: "block",
            padding:"8px 80px 0px 80px",
          }}
        />
      </div>
      <NavLink>
        <Button
          sx={{
            borderRadius: "32px",
            height: "44px",
            width: "216px",
            border: "1px solid #000C1A",
            color: "#000C1A",
            fontWeight: 700,
            fontSize: "large",
            textTransform: "none",
            padding:"10px 24px 10px 24px",
            marginRight: { lg: "3rem", md: "2rem", xs: "1.5rem" },
            "&:hover": {
              border: "1px solid blue",
              color: "blue",
            },
            "&:active": {
              backgroundColor: "blue",
              border: "1px solid blue",
              color: "white",
            },
          }}
        >
          Contact Us
        </Button>
      </NavLink>
    </div>
  );
};

export default Nav;
