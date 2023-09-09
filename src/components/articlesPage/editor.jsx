import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ 'list': 'bullet' }],
    ['link', "image"],
    ['code-block'],
  ],
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'blockquote', 'bullet', 'link', "image", 'code-block', 'bullet',
];

const QuillEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  const handleImageClick = (image) => {
    const deleteIcon = image.querySelector('.delete-image-icon');
    if (deleteIcon) {
      deleteImage(image);
    }
  };

  const handleImageMouseEnter = (event) => {
    const image = event.target;
    const deleteIcon = image.querySelector('.delete-image-icon');
    if (!deleteIcon) {
      const icon = document.createElement('span');
      icon.innerHTML = 'X'; 
      icon.classList.add('delete-image-icon', 'absolute', 'top-1', 'right-1', 'text-red-500', 'cursor-pointer');
      icon.addEventListener('click', () => deleteImage(image));
      image.appendChild(icon);
    }
  };

  const handleImageMouseLeave = (event) => {
    const image = event.target;
    const deleteIcon = image.querySelector('.delete-image-icon');
    if (deleteIcon) {
      image.removeChild(deleteIcon);
    }
  };

  const deleteImage = (image) => {
    image.parentNode.removeChild(image);
    onChange(editorRef.current.getEditor().root.innerHTML);
  };

  const handleImageLoaded = (event) => {
    const image = event.target;
    image.style.display = 'block';
    image.style.width = '100%'; 
  };


  return (
    <div className="image-container relative">
      <ReactQuill className="custom-quill-editor"
        ref={editorRef}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        onClick={(event) => {
          const image = event.target.closest('img');
          if (image) {
            handleImageClick(image);
          }
        }}
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
      />
      <style>
        {`
          .ql-editor img, .ql-editor video {
            display: block;
            max-width: 100%;
            height: auto;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default QuillEditor;