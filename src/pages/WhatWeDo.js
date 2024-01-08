import React from "react";
import Navbar from "../component/Navbar";
// import { CustomHeader } from "../component/CustomHeader";
// import { MdArrowRightAlt } from "react-icons/md";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
// import Footer from "../component/Footer";

export const WhatWeDo = ({ header, para }) => {
  const { palette } = useTheme();

  return (
    <div>
      <Navbar />
      <Box className="customeHeader" sx={{ bgcolor: palette.primary.main }}>
        <Container
          className="container"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <div className="headerText " style={{ width: "70%" }}>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
              What We Do
            </h1>
            <div
              style={{ margin: "auto" }}
              className="line"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            ></div>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              style={{ fontSize: "1rem" }}
            >
              BMyC: Your personalized career partner. We analyze skills, offer tailored insights, and provide unique career recommendations. Seamlessly track progress, connect with job opportunities, and focus on building a fulfilling career.
            </p>
          </div>
        </Container>
      </Box>
      <Box p={"2rem 0"}>
        <Container
          className="service"
          sx={{
            display: "flex",
            alignItems: "flex-start", // Align items to the start of the container
            justifyContent: "space-between",
            flexWrap: "wrap",
            textAlign: "center",
            margin: "auto",
            marginBottom: "4rem", // Margin bottom for the entire container
          }}
        >
          <Box sx={{ flex: "1 1 auto", maxWidth: "50%" }}>
            <img
              src="./removebg-preview.png"
              style={{ width: "100%", height: "auto" }}
              alt="customer"
            />
          </Box>
          <Box
            className="test"
            sx={{
              display: "flex",
              flexDirection: "column", // Stack the boxes vertically
              gap: "2rem",
              alignItems: "flex-start", // Align items to the start within the flex-direction
              justifyContent: "center",
              flex: "1 1 auto", // Adjust the basis and flexibility as needed
              maxWidth: "50%", // Adjust the width as needed
            }}
          >
            {/* Each box now has marginBottom set to '2rem', adjust as needed */}
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
                width: "100%", // Make boxes full width
                marginBottom: "1rem", // Add bottom margin for each box
              }}
            >
              <h4>Technical Test</h4>
            </Box>
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
                width: "100%", // Make boxes full width
                marginBottom: "1rem", // Add bottom margin for each box
              }}
            >
              <h4>Professional Test</h4>
            </Box>
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
                width: "100%", // Make boxes full width
                marginBottom: "1rem", // Add bottom margin for each box
              }}
            >
              <h4>Personal Test</h4>
            </Box>
            {/* Additional boxes can be added here if needed */}
          </Box>
        </Container>
      </Box>
      {/* <Footer /> */}
    </div>
  );
};
