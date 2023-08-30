import React, { useState } from "react";
// import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  // Dynamic Class To Add Animation To DropDown...
  const [toggleButton, setToggleButton] = useState(false);
  const [toogleUser, setToggleuser] = useState(false);
  const [toogleCategory, setToogleCategory] = useState(false);
  const smallScreenNavClass = [
    "fixed left-0 w-full bg-light-body dark:bg-dark-body z-10 flex justify-center items-center  flex-col transition-all",
  ];
  let navSlideAnimation = toggleButton ? "slide-down" : "slide-up";
  smallScreenNavClass.push(navSlideAnimation);

  //Hide And Display Login Sign Up Form
  let formClass = [
    `hidden absolute right-0 md:flex flex-col items-center justify-around
       text-center min-h-[10rem] p-4 bg-light-body dark:bg-dark-body w-64 transition-transform z-10 shadow-xl`,
  ];
  if (toogleUser) {
    formClass.push("translate-y-28");
  } else {
    formClass.push("-translate-y-36 ");
  }

  // Hide And Display Category Drowdown
  let categoryClass = [
    `md:block absolute d-t bg-light-body dark:bg-dark-body min-h-[400px] pb-6 w-60 rounded-e-md shadow-xl`,
  ];
  if (toogleCategory) {
    categoryClass.push("dropdown-visible");
  } else {
    categoryClass.push("dropdown-hidden");
  }
  // JSX Codes Here
  return (
    <>
      <nav className="w-full top-0 flex justify-between items-center bg-light-body dark:bg-dark-body py-4 p-8 md:pr-4 z-[999999]">
        {/* Small Screen Navigation Start Here */}
        <div className="flex cursor-pointer ">
          <i
            className="bx bx-menu-alt-left bx-sm dark:text-dark-header md:hidden"
            onClick={() => {
              setToggleButton(!toggleButton);
            }}
          ></i>

          {/* Programming is Fun ==> Toggle Button Set To True */}
          <div className={smallScreenNavClass.join(" ")}>
            <i
              className="bx bxs-up-arrow-circle bx-sm cursor-pointer absolute top-5 left-8 text-border-light dark:text-border-dark"
              onClick={() => setToggleButton(!toggleButton)}
            ></i>
            <a
              href="#login"
              className="p-main-text absolute top-5 right-7 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"
            >
              <i className="bx bxs-user-circle bx-sm text-border-light dark:text-border-dark"></i>
            </a>
            <ul className="list-none">
              <li className="p-main-text m-10 cursor-pointer text-light-header dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <a href="#home">Home</a>
              </li>
              <li className="p-main-text m-10 cursor-pointer text-light-header  dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <a href="#home">Category</a>
              </li>
              <li className="p-main-text m-10 cursor-pointer text-light-header dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <a href="#home">About</a>
              </li>
              <li className="p-main-text m-10 cursor-pointer text-light-header dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <a href="#home">Join Community</a>
              </li>
            </ul>
            <div className="absolute w-full bottom-0 p-4 bg-dark-footer dark:bg-dark-body flex justify-evenly items-center">
              <a href="#facebook" className=" m-2 p-main-text">
                <i className="bx bxl-facebook-circle bx-sm text-border-light dark:text-border-dark dark:hover:text-hover-dark hover:text-hover-light"></i>
              </a>
              <a href="#twitter" className=" m-2 p-main-text cursor-pointer">
                <i className="bx bxl-twitter bx-sm text-border-light dark:text-border-dark dark:hover:text-hover-dark hover:text-hover-light"></i>
              </a>
              <a href="#instagram" className=" m-2 p-main-text cursor-pointer">
                <i className="bx bxl-instagram bx-sm text-border-light dark:text-border-dark dark:hover:text-hover-dark hover:text-hover-light"></i>
              </a>
            </div>
          </div>
        </div>

        {/* DeskTop Screen Sizes */}
        <ul className="hidden min-w-[500px] md:min-w-[300px] list-none md:flex flex-1 justify-center items-center">
          <li className="p-main-text mx-4 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark">
            <a href="#home">Home</a>
          </li>
          <li className="p-main-text mx-4 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark">
            <a
              href="#home"
              className="flex items-center justify-center"
              onClick={() => setToogleCategory(!toogleCategory)}
            >
              Category
              <i className="bx bx-chevron-down bx-sm"></i>
            </a>
          </li>

          {/* Category DropDown Gives Me Tomuch Stress Make I Go Sleep Small  */}
          <div className={categoryClass.join(" ")}>
            <ul className="flex flex-col justify-around items-center p-main-text text-left">
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-dark font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxl-dev-to bx-md"></i>
                <a href="#dev">FrontEnd JS</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[#ff3c00] font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxs-lock-open-alt bx-md"></i>
                <a href="#dev">Hacks</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[#1d7e1d] font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxl-nodejs bx-md"></i>
                <a href="#dev">BackEnd JS</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-light font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxs-lock-alt bx-md"></i>
                <a href="#dev">Security</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[#6f00ff] font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxl-sketch bx-md"></i>
                <a href="#dev">Design</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-dark font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bx-code-block bx-md"></i>
                <a href="#dev">DSA</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[rgb(255,60,0)]  font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxs-cog bx-md"></i>
                <a href="#dev">Optimization</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-light font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bx-brain bx-md"></i>
                <a href="#dev">Debugging</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-dark font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bx-happy bx-md"></i>
                <a href="#dev"> View More!</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
            </ul>
          </div>

          <li className="p-main-text mx-4 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark">
            <a href="#home">About</a>
          </li>
        </ul>
        <header className="flex justify-end md:flex-1 md:justify-normal  text-hover-dark">
          <i className="bx bx-code-alt self-end sm:bx-md text-3xl md:text-5xl lg:text-6xl "></i>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif">
            CodersDen
          </h1>
        </header>
        <div className="hidden md:flex items-center justify-end">
          <a
            href="#join"
            className="hidden mx-4 no-underline transition-all: hover:text-hover-light dark:hover:text-hover-dark p-main-text lg:block"
          >
            Join Community
          </a>
          <div className="hidden w-[1px] h-6 bg-border-light dark:bg-border-dark mx-2 lg:block" />
          <div className="flex items-center justify-center">
            <a href="#facebook" className=" m-2 p-main-text">
              <i className="bx bxl-facebook-circle bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
            </a>
            <a href="#twitter" className=" m-2 p-main-text">
              <i className="bx bxl-twitter bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
            </a>
            <a href="#instagram" className=" m-2 p-main-text">
              <i className="bx bxl-instagram bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
            </a>
          </div>
          <div className=" w-[1px] h-6 bg-border-light dark:bg-border-dark mx-2 lg:block" />
          <span
            // href="#login"
            className="m-2 p-main-text"
            onClick={() => setToggleuser(!toogleUser)}
          >
            <i className="bx bxs-user-circle bx-sm text-border-light dark:text-border-dark   cursor-pointer hover:text-hover-light  dark:hover:text-hover-dark"></i>
          </span>
        </div>
        <div className={formClass.join(" ")}>
          <Link
            to="/signin"
            className="p-2 w-full bg-hover-dark text-cards-light hover:outline-1 cursor-pointer rounded-md hover:bg-[#5b5be2]"
          >
            Login
          </Link>
          <NavLink
            to="/createaccount"
            className="p-2 w-full bg-hover-dark text-cards-light hover:outline-1 cursor-pointer rounded-md hover:bg-[#5b5be2]"
          >
            Sign up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
