import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { MdArrowRightAlt } from "react-icons/md";
import "../App.css";

export const CustomHeader = () => {
  const { palette } = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Changing slide"); // Debugging line
      setSlideIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  const images = [
    { src: "../img1.png" },
    { src: "../img2.png" },
    { src: "../img3.png" },
    { src: "../img4.png" },
  ];
  return (
    <Box className="customeHeader" sx={{ bgcolor: palette.primary.main }}>
      <Container className="container">
        <div className="headerText">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            style={{ marginBottom: "5vh" }}
          >
            Welcome to <span style={{ color: "#fcbe16" }}>BMyC</span>
          </h1>
          {/* <div
            className="line"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            style={{ marginBottom: "5vh" }}
          ></div> */}
          <div
            class="typewriter"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <p style={{ fontSize: "1.4rem", marginBottom: "7vh" }}>
              Embrace Patience,
              <br />
              Achieve Excellence.{" "}
            </p>
          </div>
          <button data-aos="fade-up" data-aos-anchor-placement="top-center">
            Join us
            <span>
              <MdArrowRightAlt />
            </span>
          </button>
        </div>
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              className={`mySlides fade ${
                slideIndex === index ? "active" : ""
              }`}
              key={index}
            >
              {/* <div className="numbertext">{`${index + 1} / ${
                images.length
              }`}</div> */}
              <img
                src={image.src}
                style={{ height: "330px", width: "100%" }}
                alt={`Slide ${index}`}
              />
              <div className="text">{image.caption}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          {images.map((_, index) => (
            <span
              className={`dot ${slideIndex === index ? "active" : ""}`}
              key={index}
            />
          ))}
        </div>
      </Container>
    </Box>
  );
};
