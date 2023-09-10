import React from "react";
import images from "../../UI/constants/images";
const UserData = ({ name, email, uImage }) => {
  return (
    <div className="flex justify-start items-center gap-3 mb-3 cursor-pointer scale-90 hover:scale-100">
      <img src={uImage} className="w-12 rounded-full" alt="user" />
      <div>
        <h6 className="font-bold">{name}</h6>
        <h6>{email}</h6>
      </div>
    </div>
  );
};

export default UserData;
