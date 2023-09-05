import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
import validator from "validator";
import { db } from "../firebase";
<<<<<<< HEAD
import {collection, getDocs} from "firebase/firestore";
=======
import { collection, getDoc } from "firebase/firestore";
>>>>>>> upstream/dev

const AppContext = React.createContext();

export const ContextApp = ({ children }) => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  const [emailValidMessage, setEmailValidMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [admin, setAdmin] = useState();

  const navigate = useNavigate();

  const userCollection = collection(db, "Users");

    useEffect(() => {
      const getUser = async() => {
        const data = await getDocs(userCollection);
        let userAdmin = data.docs.map((item) => {
         return {...item.data(), id: item.id}
        })
        setAdmin(userAdmin);
      }
      getUser();
    }, [])

  // CREATE ACCOUNT FUNCTION FOR NEW USERS
  const auth = getAuth(app);

  const createAccount = () => {
    if (validator.isEmail(newEmail)) {
      setEmailValidMessage("Great!!");
    } else {
      setEmailValidMessage("Please, enter valid Email!");
    }
    if (!name) {
      alert("Please put a Name");
      return;
    }
    if (!confirmNewPassword || confirmNewPassword !== newPassword) {
      alert("confirm password should equal password");
      return;
    }
    createUserWithEmailAndPassword(auth, newEmail, newPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setUser(user);
          navigate("/");
          setTimeout(() => {
            alert("Success");
          }, 500);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const signIn = () => {
    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setUser(user);
          navigate("/");
          setTimeout(() => {
            alert("Success");
          }, 500);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        message,
        setMessage,
        createAccount,
        signIn,
        setEmail,
        setPassword,
        email,
        password,
        newEmail,
        setNewEmail,
        newPassword,
        setNewPassword,
        name,
        setName,
        confirmNewPassword,
        setConfirmNewPassword,
        emailValidMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
