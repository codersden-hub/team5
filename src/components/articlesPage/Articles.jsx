import React, { useState, useEffect } from "react";
import images from "../../UI/constants/images";
import { useGlobalContext } from "../../components/context";
// import {}

const Article = ({ data, headLine, datePosted, thumbnail }) => {
  const { setDisplayedPost } = useGlobalContext();
  localStorage.setItem("post-info", JSON.stringify(data));
  const handleClickedArticle = () => {
    setDisplayedPost(data);
  };
  return (
    <div
      className="bg-border-light dark:bg-dark-body flex justify-center items-center flex-col border ring-border-light dark:ring-border-dark text-light-text dark:text-dark-text rounded-md transition-transform ease-linear duration-200 hover:cursor-pointer hover:scale-105"
      onClick={handleClickedArticle}
    >
      <div
        className="w-full flex flex-row-reverse justify-between items-center 
          p-2 gap-2"
      >
        <div className="w-40 lg:w-56 relative right-2 border">
          <img src={thumbnail} alt="thumbnail1" />
        </div>
        <div className="self-start text-sm p-2 ">
          <h6 className=" font-bold mb-3 md:text-lg lg:text-xl">{headLine}</h6>
          <p className="text-light-text dark:text-border-light">{datePosted}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center p-2">
        <div className="flex gap-3 items-center justify-center">
          <span className="flex items-center py-1 px-5 w-20 justify-around gap-1 text-[#ff0000e0]">
            <i className="bx bxs-heart bx-sm"></i>
            <p>400</p>
          </span>
          <span className="flex items-center py-1 px-5 w-20 justify-around gap-1 text-[#001affe0]">
            <i className="bx bx-message-rounded-dots  bx-sm "></i>
            <p>100</p>
          </span>
        </div>
        <div className="flex gap-3 py-1 px-5 w-20 items-center justify-center">
          <i className="bx bx-edit-alt text-hover-dark  bx-sm cursor-pointer"></i>
          <i className="bx bx-trash text-hover-light cursor-pointer  bx-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default Article;
