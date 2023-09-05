import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePost = ({ articles }) => {
    const { articleId } = useParams(); 
    console.log(articles)
    
    const article = articles.find((article) => article.id === articleId);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="m-20">
            <img src={article.thumbnail} alt="Banner" className="w-full h-40 object-cover" />
            <p className="text-sm text-gray-500 mt-2">Author: {article.author}</p>
            <h2 className="text-2xl font-semibold mt-2">{article.headLine}</h2>
            <p className="text-sm text-gray-500 mt-2">{article.category}</p>
            <div className="mt-4">{article.content}</div>
        </div>
    );
};

export default ArticlePost;