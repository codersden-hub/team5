import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../components/context";
import Article from "../../components/articlesPage/Articles";
import { articles } from "../../UI/constants/data";
import SingleComment from "../../components/SingleComment/SingleComment";
import images from "../../UI/constants/images";
import Comments from "../../components/Comments/Comments";

const AdminProfile = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [inputComment, setInputComment] = useState("");
  const {
    displayedPost,
    setDisplayedPost,
    name,
    email,
    setScroll,
    selectedImage,
  } = useGlobalContext();
  // Dynamic Rendering For Comments
  const comments = displayedPost.comment;
  // Function To Handle Search To Filter Posts
  const handleSearchValue = (e) => {
    let value = e.target.value;
    setInputSearch(value);
  };
  const handleCommentValue = (e) => {
    let value = e.target.value;
    setInputComment(value);
  };

  const sendComment = (event) => {
    if (event.key === "Enter") sendCommentHandler();
  };

  const inputField = useMemo(
    () => (
      <input
        type="search"
        name="filter-post"
        id="filterPost"
        className="bg-light-body dark:bg-dark-body placeholder:text-light-text dark:placeholder:text-dark-text border p-2 
              rounded-3xl flex-1 pl-8"
        placeholder="Filter Posts"
        value={inputSearch}
        onChange={(e) => handleSearchValue(e)}
      />
    ),
    [inputSearch]
  );

  const commentInputField = useMemo(
    () => (
      <textarea
        className="w-full rounded-3xl outline-none text-light-text p-5 pr-16 overflow-y-hidden text-start"
        type="text"
        name="comment"
        id="comment"
        placeholder="Write Comment..."
        value={inputComment}
        onChange={(e) => handleCommentValue(e)}
        onKeyDown={(e) => sendComment(e)}
      ></textarea>
    ),
    [inputComment]
  );
  // Submit Button To Add Comment To List
  const sendCommentHandler = () => {
    if (inputComment.trim() === "") return null;
    const updatePost = {
      ...displayedPost,
    };
    const updateComments = updatePost.comment;
    const newComment = {
      username: name,
      email: email,
      img: selectedImage,
      time: "7hrs",
      message: inputComment,
    };
    updateComments.push(newComment);
    setDisplayedPost(updatePost);
    setScroll(true);
    setInputComment("");
  };

  const filteredArticle = articles.filter((article) =>
    article.headLine.toLowerCase().includes(inputSearch.trim().toLowerCase())
  );
  const filteredPosts = filteredArticle.map((article, id) => {
    return (
      <Article
        key={id}
        headLine={article.headLine}
        datePosted={article.datePosted.toLocaleDateString()}
        thumbnail={article.thumbnail}
        data={article}
      />
    );
  });

  const posts = articles.map((post, id) => {
    return (
      <Article
        key={id}
        headLine={post.headLine}
        datePosted={post.datePosted.toLocaleDateString()}
        thumbnail={post.thumbnail}
        data={post}
      />
    );
  });
  return (
    <div className="px-5 lg:px-16 w-full flex justify-between bg-light-body dark:bg-dark-body p-4">
      <div className="w-full flex flex-col items-start justify-between md:w-1/2">
        <header className="text-light-header dark:text-dark-header font-sans flex w-full justify-between p-2">
          <h1 className="text-3xl">Hello, James</h1>
          <Link
            to="/admin/jamesisrael/new-post"
            className="capitalize text-xs text-hover-dark mt-2 cursor-pointer flex items-center gap-1 hover:text-dark-footer dark:text-light-body dark:hover:text-border-light border p-2 rounded-3xl"
          >
            <i className="bx bxs-edit bx-sm"></i> Write Code
          </Link>
        </header>
        <nav className="text-light-text dark:text-dark-text border-b border-b-border-light mb-4 dark:border-b-border-dark mx-auto w-full">
          <ul className="p-1 font-sans font-semibold gap-4 flex  items-start my-3">
            <li className="hover:text-hover-dark cursor-pointer">
              Active Post
            </li>
            {/* Search Bar Here  */}
            {inputField}
          </ul>
        </nav>

        {/* Posts */}
        <div className="w-full flex flex-col justify-start gap-5 items-center h-[25rem] overflow-hidden overflow-y-scroll p-10 pb-10">
          {inputSearch ? (
            filteredArticle.length === 0 ? (
              <p className="text-light-header dark:text-dark-header">
                {inputSearch} Not Found
              </p>
            ) : (
              filteredPosts
            )
          ) : (
            posts
          )}
        </div>
      </div>
      <aside className="hidden md:flex flex-col w-2/5 dark:bg-[#111111] bg-cards-light rounded-md h-[35rem] p-4  text-light-text dark:text-dark-text relative">
        <div className=" border p-1.5 rounded-md mb-3">
          <h5 className="pb-4 font-sans">{displayedPost.headLine}</h5>
        </div>
        <Comments messages={inputComment}>
          {comments &&
            comments.map((comment, index) => (
              <SingleComment
                name={comment.username}
                img={comment.img}
                ago={comment.time}
                message={comment.message}
                key={index}
              />
            ))}

          <div className="absolute bottom-4 p-0 w-[85%] font-sans">
            {commentInputField}
            <button
              className="absolute m-auto top-0 bottom-0 right-2 px-1 rounded-tr-full rounded-br-full  text-hover-dark outline-none hover:scale-90 transition-transform duration-200 ease-in"
              onClick={sendCommentHandler}
            >
              <i className="bx bxs-send bx-sm"></i>
            </button>
          </div>
        </Comments>
      </aside>
    </div>
  );
};

export default AdminProfile;
