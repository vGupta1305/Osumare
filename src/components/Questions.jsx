import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Question = ({ question, onClick, isExpanded }) => (
  <Box
    sx={{
      borderBottom: "1px solid #EFEFEF",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      background: isExpanded ? "#2196F3" : "transparent",
      color: isExpanded ? "white" : "black",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "0.5rem",
          cursor: "pointer",
          fontSize: "1.2rem",
          fontWeight: 600,
          fontFamily: "Montserrat, sans-serif",
        }}
        onClick={onClick}
      >
        {question}
      </Typography>

      {isExpanded ? (
        <ArrowDropUpIcon onClick={onClick} />
      ) : (
        <ArrowDropDownIcon onClick={onClick} />
      )}
    </Box>
  </Box>
);

const Answer = ({ answer, isExpanded }) => (
  <Box>
    {isExpanded && (
      <Typography
        sx={{
          padding: "2rem",
          fontSize: "1rem",
        }}
      >
        {answer}
      </Typography>
    )}
  </Box>
);

const Questions = () => {
  const questionsData = [
    {
      question: "3. How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "3. How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "3. How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box
      sx={{
        background: "#F9F9F9",
        // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        paddingY: { xs: "2rem", md: "5rem" },
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Box
        className={"text-container"}
        sx={{
          width: { xs: "90vw", md: "60vw" },
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
            fontSize: { xs: "1.8rem", md: "2rem" },
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </Typography>
      </Box>

      <Box
        className="questions-container"
        sx={{  width: { xs: "90vw", md: "50vw" },  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)" }}
      >
        {questionsData.map((item, index) => (
          <React.Fragment key={index}>
            <Question
              question={item.question}
              onClick={() => handleToggleAnswer(index)}
              isExpanded={expandedIndex === index}
            />
            <Answer answer={item.answer} isExpanded={expandedIndex === index} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Questions;
