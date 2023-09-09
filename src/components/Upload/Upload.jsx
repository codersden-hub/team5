import React, { useRef } from "react";
import { useGlobalContext } from "../context";

function ImageUpload() {
  const { selectedImage, setSelectedImage } = useGlobalContext();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const imgURL = selectedImage;
  console.log(selectedImage);
  return (
    <div className="w-[500px] h-[300px] m-auto">
      <h1>Image Upload Component</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button
        className="bg-hover-dark p-4"
        onClick={() => {
          fileInputRef.current.click();
        }}
      >
        Upload Image
      </button>
      {selectedImage && (
        <div className="border ">
          <h2>Preview:</h2>
          <div className="bg-dark-body p-4 absolute  h-40 w-40  right-5 top-40">
            <img
              className="w-full max-h-[6rem]"
              src={selectedImage}
              alt="Image Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
