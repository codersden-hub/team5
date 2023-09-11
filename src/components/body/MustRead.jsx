import React from "react";
import { useGlobalContext } from "../context";
import images from "../../UI/constants/images";
import SidePost from "./SidePost";

const MustRead = () => {
  const { articlesData } = useGlobalContext();
  console.log(articlesData);
  return (
    <div className="p-8 md:px-14">
      <h1 className="relative inline-block font-semibold lg:font-bold  text-light-header dark:text-dark-header font-sans ">
        MUST READ
      </h1>
      <div className="relative w-full min-w-full flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="flex flex-col items-start justify-start min-h-max flex-1">
          <div className="h-60 w-full">
            <img
              src={images.avatar3}
              className="object-fill rounded w-full h-full"
              alt="..."
            />
          </div>
          <div className="flex items-center w-full p-3 gap-2 mt-3 p-main-text">
            <img src={images.avatar2} className="w-10 rounded-full" alt="" />
            <p>james Israel</p>
            <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
            <p>6 hours ago</p>
          </div>
          <h3 className="text-light-header dark:text-dark-header font-semibold">
            Personal Branding and digital marketing: offer tips for building a
            personal brand online
          </h3>
          <p className="p-main-text mt-3">
            Personal Branding and digital marketing: offer tips for building a
            personal brand online Personal Branding and digital marketing: offer
            tips for building a personal brand onlinePersonal Branding and
            digital marketing: offer tips for building a personal brand online
            Personal Branding and digital marketing: offer tips for building a
            personal brand onlinePersonal Branding and digital marketing: offer
            tips for building a personal brand online Personal Branding and
            digital marketing: offer tips for building a personal brand online
          </p>
          <div className="flex flex-row-reverse mt-3 justify-center items-center">
            <p className="p-main-text ">Technology</p>
            <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-start items-start">
          <SidePost />
          <SidePost />
          <SidePost />
          <SidePost />
        </div>
      </div>
    </div>
  );
};
export default MustRead;
