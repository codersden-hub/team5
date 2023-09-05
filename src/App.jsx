import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import AdminProfile from "./pages/profiles/AdminProfile";
import UserProfile from "./pages/profiles/UserProfile";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/admin/jamesisrael" element={<AdminProfile />}></Route>
        <Route path="/jamesisrael" element={<UserProfile />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
