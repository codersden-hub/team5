import React from "react";
import images from "../../UI/constants/images";

const SidePost = () => {
  return (
    <div className="flex justify-start items-start gap-1 cursor-pointer rounded hover:bg-cards-light border p-3 mb-3">
      <div className="w-60">
        <img
          src={images.avatar1}
          className="object-fill rounded w-full h-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex item p-main-text text-sm  p-1  items-center justify-around ">
          <img src={images.avatar2} className="w-8 rounded-full" alt="" />
          <small>james Israel</small>
          <div className="w-4 h-[1px] bg-light-text dark:bg-dark-text" />
          <small>6 hours ago</small>
        </div>
        <h6 className="text-light-header dark:text-dark-header font-semibold mt-3">
          Personal Branding and digital marketing: offer tips for building a
          personal brand online
        </h6>{" "}
        <div className="flex flex-row-reverse mt-3 justify-center items-center text-sm p-main-text float-right">
          <small className="">Technology</small>
          <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
        </div>
      </div>
    </div>
  );
};
export default SidePost;
