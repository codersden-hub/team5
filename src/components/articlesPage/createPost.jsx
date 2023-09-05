import React, { useState } from 'react';
import ArticleForm from './articleForm';

const CreateArticle = () => {

  const handleSubmit = (articleData) => {
    console.log(articleData);
  };

  return (
    <div>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateArticle;