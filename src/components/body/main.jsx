import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import HeaderAndFilter from './Header';

const Main = () => {
    const {articlesData} = useGlobalContext();
    console.log(articlesData);
    // const [article, setArticle] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Latest Articles');

    // useEffect(() => {
    //     setArticle(articlesData);
    // }, []);

    const showSeeAllLink = articlesData.length > 3 * 2;
    const articlesToDisplay = showSeeAllLink ? articlesData.slice(0, 3 * 2) : articlesData;

    const filteredArticles = articlesToDisplay.filter((article) => {
        return selectedCategory === 'Latest Articles' || article.category === selectedCategory;
    });
    const categories = ['Latest Articles', "Technology", 'Javascript', 'Design', 'Algorithms', 'UI/UX', 'Security'];

   
    return (
      <div className='w-full mx-10'>
        <HeaderAndFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => setSelectedCategory(category)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredArticles.length === 0 ? (
            <div className="text-center text-gray-500">
              No articles found for "{selectedCategory}".
            </div>
          ) : (
            filteredArticles.map((article, index) => {
              const text = (
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: article.editorHtml,
                  }}
                />
              );
              return (
                <div>
                  <Link
                    to={`/ArticlePost/${article.id}`}
                    key={index}
                    className="bg-light-body rounded-lg overflow-hidden"
                  >
                    <img
                      src={article.thumbnail}
                      alt="Banner"
                      className="h-40 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-500">
                        Author: {article.author}
                      </p>
                      <br />
                      <h2 className="text-xl font-semibold">{article.title}</h2>
                      <p className="text-sm text-gray-500">
                        {article.category}
                      </p>
                      <br />
                      {text}
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
        <div className="w-20 ml-auto text-orange-500 hover:underline mt-4">
          {showSeeAllLink && (
            <Link to="/catalog" >
              See All
            </Link>
          )}
        </div>
      </div>
    );          
};

export default Main;