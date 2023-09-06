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
import {addDoc, collection, getDocs} from "firebase/firestore";

const AppContext = React.createContext();

export const ContextApp = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState();
  const [message, setMessage] = useState("");
  const [emailValidMessage, setEmailValidMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  // const [adminDetail, setAdminDetail] = useState();
  const [isLoginIn, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const userCollection = collection(db, "Users");

   const addUser = async (user) => {
    
     await addDoc(userCollection, {
       userName: name,
       userEmail: user,
       role: ["user"],
     });
   };

  const getUser = async() => {
    setIsAdmin(false);
    const data = await getDocs(userCollection);
    let userAdmin = data.docs.map((item) => {
     return {...item.data(), id: item.id}
    })
    // setAdminDetail(userAdmin);
    let user = localStorage.getItem("user");
    user? setIsLogin(true) : setIsLogin(false);
    for (const i of userAdmin) {
      if(i.userEmail === user) {
        setEmail(i.userEmail);
        setName(i.userName);
      }

      if ( i.userEmail === user && i.role[1]) {
        setIsAdmin(true);
        break;
      }
    }
    
  }
  useEffect(() => {
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
          navigate("/signin");
          setTimeout(() => {
            alert("Success, now you can Log in");
          }, 500);
          addUser(user.email);
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
        localStorage.setItem(
          "user",
          user.email
        );
        navigate("/");
        setTimeout(() => {
          alert("Success");
        }, 500);
      }
      getUser();
      setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <AppContext.Provider
      value={{
        getUser,
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
        setIsLogin,
        isLoginIn,
        isAdmin
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
