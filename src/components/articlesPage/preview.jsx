import React from 'react';

const ArticlePreview = ({ title, minContent, category, userName, userImage }) => {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <img src={image} alt="post" />
        <div className="flex items-center mb-4">
          <img src={userImage} alt="User" className="w-10 h-10 rounded-full mr-2" />
          <span className="text-gray-600">{userName}</span>
        </div>
        <p className="text-gray-200 mb-1">-{category}</p>
  
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: minContent }} />

      </div>
    );
  };
  
  export default ArticlePreview;