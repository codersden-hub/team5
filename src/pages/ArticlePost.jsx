import React from 'react';
import { useParams } from 'react-router-dom';
const ArticlePost = ({ articles }) => {
    const { post } = useParams(); 
    console.log(articles)
    
    const articleSelected = articles.find((article) => article.id === post);
    console.log("Found Article:", articleSelected);

    if (!articleSelected) {
        return <div>Article not found</div>;
    }

    return (
        <div className="m-10">
            <img src={articleSelected.thumbnail} alt="Banner" className="w-full h-40 object-cover" />
            <p className="text-sm text-gray-500 mt-2">Author: {articleSelected.author}</p>
            <h2 className="text-2xl font-semibold mt-2">{articleSelected.headLine}</h2>
            <p className="text-sm text-gray-500 mt-2">{articleSelected.category}</p>
            <div className="mt-4">{articleSelected.minContent}</div>
        </div>
    );
};

export default ArticlePost;