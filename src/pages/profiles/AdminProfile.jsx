import React from "react";
import images from "../../UI/constants/images";

const AdminProfile = () => {
  return (
    <div className="px-5 lg:px-16 w-full flex justify-between bg-light-body dark:bg-dark-body p-4 gap-2">
      <div className="w-full flex flex-col items-start justify-between md:w-3/5">
        <header className="text-light-header dark:text-dark-header font-sans">
          <h1 className="text-3xl">Hello, James</h1>
          {/* <div className="dark:text-dark-text">url</div> */}
        </header>
        <nav className="text-light-text dark:text-dark-text border-b border-b-border-light dark:border-b-border-dark mx-auto w-full">
          <ul className="p-1 font-sans font-semibold gap-4 flex  items-start my-3">
            <li className="hover:text-hover-dark cursor-pointer">Home</li>
            <li className="hover:text-hover-dark cursor-pointer">Post</li>
            <li className="hover:text-hover-dark cursor-pointer">Comments</li>
          </ul>
        </nav>

        {/* Posts */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col border text-light-text dark:text-dark-text">
            <div
              className="w-full flex flex-row-reverse justify-between items-center 
          p-1 gap-2"
            >
              <div className="w-40 relative right-2">
                <img src={images.quote1} alt="thumbnail1" />
              </div>
              <div className="self-start text-sm p-2">
                <h6 className=" font-semibold mb-3">
                  Working with JavaScript Variables. Understanding JavaScript
                  Variables
                </h6>
                <p className="text-border-light">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-2">
              <div className="flex gap-3 items-center justify-center">
                <span className="">
                  <i className="bx bx-heart"></i>
                  400
                </span>
                <span className="">
                  <i className="bx bx-message-rounded-dots"></i>
                  100
                </span>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <i className="bx bx-edit-alt text-hover-dark"></i>
                <i className="bx bx-trash text-hover-light"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="hidden border-l md:flex flex-col w-2/5 bg-cards-light"></aside>
    </div>
  );
};

export default AdminProfile;

{
  /* <div className="flex flex-col mt-10 w-full">
  <div className="flex flex-row-reverse gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
    <div
      className="bg-light-body rounded-md
            w-[80px]  lg:min-w-[10rem]"
    >
      <img src={images.quote2} alt="quote" />
    </div>
    <div className="text-light-text dark:text-dark-text font-serif capitalize border">
      <h5 className="text-lg lg:font-bold leading-6 mb-4">
        Working with JavaScript Variables. Understanding JavaScript Variables
      </h5> */
}
{
  /* <p className="text-sm mb-2">
                JavaScript variables are essential building blocks of any
                JavaScript program. Learn how to declare, initialize, and
                manipulate variables to store and manage data in your web
                applications
              </p> */
}
{
  /* //   <p className="text-sm">{new Date().toLocaleDateString()}</p> */
}
{
  /* //   <div className="p-2 flex items-center justify-between w-full">
    //     <div className="flex gap-3 items-center justify-center">
    //       <span>
    //         <i className="bx bx-heart"></i>
    //         400
    //       </span>
    //       <p>
    //         <i className="bx bx-message-rounded-dots"></i>
    //         100
    //       </p>
    //     </div>
    //     <div className="flex gap-3 items-center justify-center">
    //       <i className="bx bx-edit-alt text-hover-dark"></i>
    //       <i className="bx bx-trash text-hover-light"></i>
    //     </div>
    //   </div>
    // </div> */
}
{
  /* </div> */
}
{
  /* <div className="flex gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
            <div className="bg-light-body w-52 h-52 min-w-[13rem] rounded-md"></div>
            <div className="text-light-text dark:text-dark-text font-serif capitalize">
              <h5 className="font-bold leading-6 mb-4">
                Working with JavaScript Variables. Understanding JavaScript
                Variables
              </h5>
              <p className="text-sm mb-2">
                JavaScript variables are essential building blocks of any
                JavaScript program. Learn how to declare, initialize, and
                manipulate variables to store and manage data in your web
                applications
              </p>
              <p className="text-sm">{new Date().toLocaleDateString()}</p>
              <div className="p-2 flex items-center justify-between w-full">
                <div className="flex gap-3 items-center justify-center">
                  <span>
                    <i className="bx bx-heart"></i>
                    400
                  </span>
                  <p>
                    <i className="bx bx-message-rounded-dots"></i>
                    100
                  </p>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <i className="bx bx-edit-alt text-hover-dark"></i>
                  <i className="bx bx-trash text-hover-light"></i>
                </div>
              </div>
            </div>
          </div> */
}
{
  /* </div>; */
}
