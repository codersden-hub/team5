import React from "react";
const Backdrop = (props) =>
  props.show ? (
    <div
      className="w-full h-screen absolute left-0 top-0 bottom-0 right-0
  cursor-pointer bg-overlay border"
      onClick={props.clicked}
    ></div>
  ) : null;

export default Backdrop;
