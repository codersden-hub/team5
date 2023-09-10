import React, { useState, useMemo, useEffect } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import images from "../../UI/constants/images";
import { useGlobalContext } from "../context";
import UserData from "../UserData/UserData";

const AddAdmin = () => {
  const { adminModal, setAdminModal } = useGlobalContext();
  const [addAdmin, setAddAmin] = useState("");

  const inputAdmin = useMemo(() => {
    return (
      <input
        type="email"
        className="w-full p-2 border outline-none rounded-md"
        placeholder="Enter Your Email"
        value={addAdmin}
        onChange={(event) => setAddAmin(event.target.value)}
      />
    );
  }, [addAdmin]);
  const users = [
    {
      id: 1,
      name: "emmanuel",
      email: "emmanuel143@gmail.com",
      pImage: images.avatar1,
    },
    {
      id: 2,
      name: "John Doe",
      email: "johndoe143@gmail.com",
      pImage: images.avatar2,
    },
    {
      id: 3,
      name: "Victor",
      email: "victor143@gmail.com",
      pImage: images.avatar3,
    },
    {
      id: 4,
      name: "Hazi",
      email: "hazibro3@gmail.com",
      pImage: images.avatar4,
    },
    {
      id: 5,
      name: "James Israel",
      email: "yongeazi143@gmail.com",
      pImage: images.avatar5,
    },
    {
      id: 6,
      name: "Chisom Daniels",
      email: "chisomdan3@gmail.com",
      pImage: images.avatar2,
    },
    {
      id: 7,
      name: "Chioma James",
      email: "chioma@gmail.com",
      pImage: images.avatar4,
    },
    {
      id: 8,
      name: "Vitoria James",
      email: "jamesvictoria@gmail.com",
      pImage: images.avatar1,
    },
    {
      id: 9,
      name: "Chinonso Daniels",
      email: "chinonsodaniels@gmail.com",
      pImage: images.avatar5,
    },
    {
      id: 10,
      name: "Code Edx",
      email: "codeedx45@gmail.com",
      pImage: images.avatar1,
    },
  ];
  const user = users.filter((_user) =>
    _user.email.toLowerCase().includes(addAdmin.trim().toLowerCase())
  );
  const uEle = user.map((data) => {
    const { id, name, email, pImage } = data;
    return <UserData key={id} name={name} email={email} uImage={pImage} />;
  });

  return (
    <>
      {/* <Backdrop show={adminModal} clicked={() => setAdminModal(!adminModal)} /> */}
      {adminModal && (
        <div className="fixed mx-auto flex flex-col items-center justify-center z-[999999] top-[30%] left-1/2 -translate-x-2/4  bg-cards-light p-4 w-[400px] lg:w-[500px] rounded-lg shadow-xl">
          <h5 className="font-sans mb-2">Add User To Admin List</h5>
          {inputAdmin}
          <div className="w-full overflow-y-scroll mt-3 p-2 max-h-[150px]">
            {addAdmin.trim() ? (
              user.length === 0 ? (
                <p>{addAdmin} does not exixt</p>
              ) : (
                uEle
              )
            ) : null}
          </div>
          <div className="w-full flex items-center justify-between p-4 flex-row-reverse">
            <button className="p-2 border rounded-md cursor-pointer hover:font-bold">
              Add User
            </button>
            <button
              className="p-2 border rounded-md cursor-pointer hover:font-bold"
              onClick={() => setAdminModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAdmin;
