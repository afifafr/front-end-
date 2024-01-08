import React from "react";
import Navbar from "../component/Navbar";
// import Header from "../component/Header";
import { CustomHeader } from "../component/CustomHeader";
import Container from "@mui/material/Container";
// import Footer from "../component/Footer";
import { Box } from "@mui/material";
// import { useTheme } from "@emotion/react";
export const WhoWeAra = () => {
  // const { palette } = useTheme();
  return (
    <>
      <Navbar />
      <CustomHeader />
      <Box className="whoWeAre">
        <Container>
          <p data-aos="zoom-out-down" style={{ fontSize: "1.1rem" }}>
          BMyC is an innovative platform dedicated to helping young graduates and job seekers make the transition to the job market. BMyC guides individuals towards job opportunities that match their specific skills and interests. In addition to these assessments, BMyC offers sound advice and practical recommendations to optimize the job search. The aim of this personalized support is to provide comprehensive guidance. Thanks to this comprehensive and personalized approach, BMyC helps young graduates and job seekers to make informed decisions and achieve their career goals.


          </p>
        </Container>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
