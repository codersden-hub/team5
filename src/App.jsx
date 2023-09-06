import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/body/main"
import { articles } from "./UI/constants/data";
import ArticlePost from "./pages/singlePage";
import Home from "./pages/Home";
import AdminProfile from "./pages/profiles/AdminProfile";
import UserProfile from "./pages/profiles/UserProfile";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import CreateArticle from "./components/articlesPage/createPost";

>>>>>>> 17ccb0e8a80889fb6c8a17d2eb5a452ea60ec10a
const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignUp />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/ArticlePost/:post" element={<ArticlePost articles= {articles}/>} />
      </Routes>
      <Main />
=======
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/admin/jamesisrael" element={<AdminProfile />}></Route>
        <Route path="/jamesisrael" element={<UserProfile />}></Route>
        <Route
          path="/admin/jamesisrael/new-post"
          element={<CreateArticle />}
        ></Route>
      </Routes>
      <Footer />
>>>>>>> 17ccb0e8a80889fb6c8a17d2eb5a452ea60ec10a
    </>
  );
};

export default App;