import React, { useState } from "react";
import ArticleForm from "./articleForm";

const CreateArticle = () => {
  const handleSubmit = (articleData) => {
    //handle submit buttion action right here!
    console.log(articleData);
  };

  return (
    <div className="w-full h-screen bg-light-body dark:text-dark-text pt-24 dark:bg-dark-body">
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateArticle;
