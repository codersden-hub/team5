import React, { useState, useEffect } from 'react';
import { mockFireStoreData } from './mock';
import { Link } from 'react-router-dom';

const MockData = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Set the articles state to the values of mockFireStoreData
        setArticles(Object.values(mockFireStoreData));
    }, []);

    const articlesToDisplay = showSeeAllLink ? articles.slice(0, 3 * 3) : articles;

    return (
        <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src={article.Banner} alt="Banner" className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{article.Title}</h2>
                        <p className="text-gray-600">{article.Content}</p>
                        <p className="text-sm text-gray-500">Author: {article.Username}</p>
                        <p className="text-sm text-gray-500">Date: {article.Timestamp}</p>
                    </div>
                </div>
            ))}
            {showSeeAllLink && (
                <Link to="/catalog" className="mt-4 text-blue-500 hover:underline block text-center">
                    See All
                </Link>
            )}
        </div>
    );
};

export default MockData;
