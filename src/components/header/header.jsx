import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import SignUp from "../SignUp/SignUp";
import CreateAccount from "../SignUp/CreateAccount";
import { Route, Routes } from "react-router-dom";

const Header = () => (
  <>
    <Navbar />
    <Carousel autoSlide={true} duration={10000} />
  </>
);
export default Header;
