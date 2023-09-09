import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import { articles } from "./UI/constants/data";
import ArticlePost from "./pages/ArticlePost";
import Home from "./pages/Home";
import AdminProfile from "./pages/profiles/AdminProfile";
import UserProfile from "./pages/profiles/UserProfile";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import CreateArticle from "./components/articlesPage/createPost";
import ImageUpload from "./components/Upload/Upload";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route
          path="/ArticlePost/:post"
          element={<ArticlePost articles={articles} />}
        />
        <Route path="/admin/jamesisrael" element={<AdminProfile />} />
        <Route path="/jamesisrael" element={<UserProfile />} />
        <Route path="/admin/jamesisrael/new-post" element={<CreateArticle />} />
        <Route path="/upload" element={<ImageUpload />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
