import React from "react";

const AdminProfile = () => {
  return (
    <div className="px-16 w-full flex justify-between bg-light-body dark:bg-dark-body p-4 gap-2">
      <div className="flex flex-col items-start justify-between w-3/5">
        <header className="text-light-header dark:text-dark-header font-sans">
          <h1>Hello, James</h1>
        </header>
        <div className="">copy profile url</div>
        <nav className="text-light-text dark:text-dark-text border-b border-b-border-light dark:border-b-border-dark mx-auto w-full">
          <ul className="p-1 font-sans font-semibold gap-4 flex  items-start">
            <li className="hover:text-hover-dark cursor-pointer">Home</li>
            <li className="hover:text-hover-dark cursor-pointer">Post</li>
            <li className="hover:text-hover-dark cursor-pointer">Comments</li>
          </ul>
        </nav>

        {/* Posts */}
        <div className="flex flex-col mt-10 w-full">
          <div className="flex gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
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
                    <i class="bx bx-heart"></i>
                    400
                  </span>
                  <p>
                    <i class="bx bx-message-rounded-dots"></i>
                    100
                  </p>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <i class="bx bx-edit-alt text-hover-dark"></i>
                  <i class="bx bx-trash text-hover-light"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
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
                    <i class="bx bx-heart"></i>
                    400
                  </span>
                  <p>
                    <i class="bx bx-message-rounded-dots"></i>
                    100
                  </p>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <i class="bx bx-edit-alt text-hover-dark"></i>
                  <i class="bx bx-trash text-hover-light"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
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
                    <i class="bx bx-heart"></i>
                    400
                  </span>
                  <p>
                    <i class="bx bx-message-rounded-dots"></i>
                    100
                  </p>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <i class="bx bx-edit-alt text-hover-dark"></i>
                  <i class="bx bx-trash text-hover-light"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
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
                    <i class="bx bx-heart"></i>
                    400
                  </span>
                  <p>
                    <i class="bx bx-message-rounded-dots"></i>
                    100
                  </p>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <i class="bx bx-edit-alt text-hover-dark"></i>
                  <i class="bx bx-trash text-hover-light"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-3 w-full border rounded-sm border-border-light dark:border-border-dark p-3">
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
                    <i class="bx bx-heart"></i>
                    400
                  </span>
                  <p>
                    <i class="bx bx-message-rounded-dots"></i>
                    100
                  </p>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <i class="bx bx-edit-alt text-hover-dark"></i>
                  <i class="bx bx-trash text-hover-light"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="border-l flex flex-col w-2/5 bg-cards-light">
        Hello
      </aside>
    </div>
  );
};

export default AdminProfile;
