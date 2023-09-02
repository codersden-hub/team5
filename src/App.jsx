import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MockData from "./components/body/mockDataComponent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <MockData />
      {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignUp />} />
          <Route path="/createaccount" element={<CreateAccount />} />
      </Routes> */}
    </>
  );
};

export default App;
