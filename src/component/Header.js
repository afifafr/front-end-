import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from "../images/jobbg.jpg";
import SearchInputEl from "./SearchInputEl";

const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    height: "40%",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "fill",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.secondary.main,
  }));
  return (
    <>
      <StyleHeader>
        <SearchInputEl />
      </StyleHeader>
    </>
  );
};

export default Header;
