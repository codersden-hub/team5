import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
import validator from "validator";

const AppContext = React.createContext();

export const ContextApp = ({children}) => {
    const [user, setUser] = useState();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // CREATE ACCOUNT FUNCTION FOR NEW USERS
    const auth = getAuth(app);
    
    const createAccount = () => {
      if (validator.isEmail(email)) {
        setMessage("Great!!");
      } else {
        setMessage("Please, enter valid Email!");
      }
      createUserWithEmailAndPassword(auth, email, password)
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
            // navigate("/");
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
          password
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

