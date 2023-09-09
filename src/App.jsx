import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import { mockData } from "./components/body/mock";
import ArticlePost from "./pages/ArticlePost";
import Home from "./pages/Home";
import About from "./pages/about";
import AdminProfile from "./pages/profiles/AdminProfile";
import SubArticles from "./components/body/subArticles";
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
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/ArticlePost/:post" element={<ArticlePost articles= {mockData}/>} />
        <Route path="/subArticles" element={<SubArticles />} />
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
