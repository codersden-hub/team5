import React, { useState, useEffect } from 'react';
import { mockFireStoreData } from './mock';

const MockData = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        setArticles(mockFireStoreData);
      }, []);

    return (
        <div>
            {articles.map((article, index) => (
                <div key={index}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <p>Author: {article.author}</p>
                <p>Date: {article.date}</p>
                </div>
            ))}
        </div>
    );
};
export default MockData;
