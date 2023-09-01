import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar:[
    [{ 'header': [1, 2, 3, false] }], 
    //['super', 'sub'],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{'list': 'bullet'}],
    ['link', 'image', 'video'],
    ['code-block'],
  ],
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'blockquote', 'bullet', 'link', 'image', 'video', 'code-block', 'bullet',
];

const QuillEditor = ({value, onChange}) => {

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default QuillEditor;