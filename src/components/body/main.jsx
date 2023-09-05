import React, { useState, useEffect } from 'react';
import { articles } from '../../UI/constants/data';
import { Link, useNavigate } from 'react-router-dom';
import HeaderAndFilter from './Header';
import ArticlePost from '../../pages/singlePage';

const Main = () => {
    const [article, setArticle] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Latest Articles');
    const navigate = useNavigate();

    useEffect(() => {
        setArticle(Object.values(articles));
    }, []);

    const showSeeAllLink = article.length > 3 * 3;
    const articlesToDisplay = showSeeAllLink ? article.slice(0, 3 * 3) : article;

    const filteredArticles = articlesToDisplay.filter((article) => {
        return selectedCategory === 'Latest Articles' || article.category === selectedCategory;
    });
    const categories = ['Latest Articles', 'Javascript', 'Design', 'Algorithms', 'UI/UX', 'Security']; // Add categories here
    
    const handleCardClick = (articleId) => {
        navigate(`/ArticlePost/${articleId}`);
    };

    return (
        <>
            <HeaderAndFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => setSelectedCategory(category)}
            />     
            <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredArticles.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No articles found for "{selectedCategory}".
                    </div>
                ) : (
                    filteredArticles.map((article, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md" onClick={() => handleCardClick(article.id)}>
                            <img src={article.thumbnail} alt="Banner" className="w-full h-40 object-cover" />                                      
                            <div className="p-4">
                                <p className="text-sm text-gray-500">Author: {article.author}</p><br/>
                                <h2 className="text-xl font-semibold">{article.headLine}</h2>
                                <p className="text-sm text-gray-500">{article.category}</p><br/>  
                                <p className="text-gray-600">{article.minContent}</p>              
                            </div> 
                        </div>
                    ))
                )}
                {showSeeAllLink && (
                    <Link to="/catalog" className="mt-4 text-blue-500 hover:underline block text-center">
                        See All
                    </Link>
                )}
            </div>
        </>  
    );          
};
export default Main;   