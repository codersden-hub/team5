import React from "react";
import { Link } from "react-router-dom";
import images from "../../UI/constants/images";
const UserProfile = () => {
  return (
    <>
      <div className="relative">
        <div className="p-0 h-28 bg-light-footer rounded-t-xl" />
        <img
          className="rounded-full w-16 absolute left-0 right-0 m-auto top-20 ring-4 ring-light-body"
          src={images.profile}
          alt=""
        />
        <div className="flex flex-col justify-center items-center mt-12 font-medium font-sans dark:text-dark-text">
          <p className="text-sm">doyourbestpls@gmail.com</p>
          {/* <p className=" bg-hover-dark text-cards-light p-1 rounded-sm">
            Admin
          </p> */}
          <h6 className="mt-2 font-serif text-3xl">James Israel</h6>
          <Link
            to="/"
            className="capitalize text-xs text-hover-dark mt-2 cursor-pointer flex items-center gap-1 dark:text-cards-light dark:hover:text-hover-dark "
          >
            <i className="bx bxs-edit bx-sm"></i> Write Code
          </Link>
        </div>
        {/* <div className="flex items-center justify-around flex-1 mt-5">
          <div className="bg-border-light rounded-lg flex items-center justify-between flex-col p-4">
            <p className="text-xs font-semibold">45</p>
            <p className="text-xs font-semibold">Posts</p>
          </div>
          <div className="bg-border-light rounded-lg flex items-center justify-between flex-col p-4">
            <p className="text-xs font-semibold">100</p>
            <p className="text-xs font-semibold">Comments</p>
          </div>
          <div className="bg-border-light rounded-lg flex items-center justify-between flex-col p-4">
            <p className="text-xs font-semibold">50</p>
            <p className="text-xs font-semibold">Likes</p>
          </div>
        </div> */}
        <div className="mt-5 flex-col flex justify-center items-center mx-auto px-2 dark:text-dark-text">
          <div
            className="flex  items-end justify-between w-full py-2 cursor-pointer
          border-b border-b-border-light"
          >
            <i className="bx bxs-user-detail bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm dark:hover:text-border-light">
              Profile
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div
            className="flex  items-end justify-between w-full py-2 cursor-pointer
          border-b border-b-border-light"
          >
            <i className="bx bxs-bell-ring bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Notification
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div className="flex  items-end justify-between w-full py-2 cursor-pointer">
            <i className="bx bxs-cog bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Settings
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          {/* Others */}
          <div className="flex mt-4  items-end justify-between w-full py-2 cursor-pointer border-t border-t-border-light">
            <i className="bx bxs-key bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Grant Admin Verification
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div className="flex  items-end justify-between w-full py-2 cursor-pointer border-t border-t-border-light">
            <i className="bx bxs-help-circle bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Feedback
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          {/* Logout */}
          <div
            className="flex pt-4 justify-between w-full py-2 
            self-end cursor-pointer
          border-t border-t-border-light mt-5"
          >
            <i className="bx bx-log-out bx-sm text-hover-dark"></i>
            <p
              className="flex-1 self-center pl-1
            text-sm dark:hover:text-border-light"
            >
              Login Out
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
