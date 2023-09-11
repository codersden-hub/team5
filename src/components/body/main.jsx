import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import images from "../../UI/constants/images";
import HeaderAndFilter from "./mainHeader";

const Main = () => {
  const { articlesData } = useGlobalContext();
  // const [article, setArticle] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Latest Articles");

  // useEffect(() => {
  //     setArticle(articlesData);
  // }, []);

  const showSeeAllLink = articlesData.length > 3 * 2;
  const articlesToDisplay = showSeeAllLink
    ? articlesData.slice(0, 3 * 2)
    : articlesData;

  const filteredArticles = articlesToDisplay.filter((article) => {
    return (
      selectedCategory === "Latest Articles" ||
      article.category === selectedCategory
    );
  });

  const categories = [
    "Latest Articles",
    "Javascript",
    "Design",
    "Algorithms",
    "UI/UX",
    "Security",
  ];

  return (
    <div className="lg:w-[1000px] lg:mx-auto">
      <HeaderAndFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <div className=" grid grid-cols-1 md:grid-cols-3 w-full">
        {filteredArticles.length === 0 ? (
          <div className="text-center text-gray-500">
            No articles found for "{selectedCategory}".
          </div>
        ) : (
          filteredArticles.map((article, index) => {
            const text = (
              <div
                className="text-gray-600 font-sans mb-4"
                dangerouslySetInnerHTML={{
                  __html: article.editorHtml,
                }}
              />
            );

            return (
              <div
                key={index}
                className=" relative max-w-[320px] md:max-w-[370px] bg-light-body rounded-lg p-4 overflow-hidden group hover:bg-cards-light transition-translate duration-500 ease-out mx-auto cursor-pointer scale-90 hover:scale-100"
              >
                <img
                  src={article.thumbnail}
                  alt="Banner"
                  className="w-full h-60 object-cover mx-auto rounded"
                />
                <div className="py-6 flex flex-col item-center justify-center gap-4">
                  <div className="flex items-center mb-2">
                    <img
                      className="rounded-full w-10  mr-2"
                      src={images.avatar2}
                      alt=""
                    />
                    <p className="text-sm text-gray-500 font-sans font-bold p-main-text">
                      {" "}
                      {article.author}
                    </p>
                  </div>
                  <h1 className="font-semibold font-sans leading-tight text-3xl capitalize text-light-header dark:text-dark-header">
                    {article.title}
                  </h1>
                  <p className="text-sm p-main-text">-{article.category}</p>
                  {/* {truncateText(text, 100)} */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: text.props.dangerouslySetInnerHTML.__html.slice(
                        0,
                        100
                      ),
                    }}
                    className="p-main-text pb-8 .d-text"
                  />
                  <div>
                    <Link
                      to={`/ArticlePost/${article.id}`}
                      className="p-3 bg-hover-dark text-dark-text absolute right-4 bottom-2"
                    >
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                  {/* <p className="text-gray-600 font-sans mb-4 pb-2">
                    {truncateText(articles.content, 100)}
                  </p> */}
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="w-20 ml-auto text-orange-500 hover:underline mt-4">
        {showSeeAllLink && (
          <Link
            to="/subArticles"
            className="text-orange-500 hover:underline text-right"
          >
            See All
          </Link>
        )}
      </div>
    </div>
  );
};

export default Main;
