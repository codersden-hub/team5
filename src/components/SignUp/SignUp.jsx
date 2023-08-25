import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import validator from "validator";

const SignUp = () => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  // const { setUser, message, setMessage } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // SIGN IN FUNCTION OF EXISTING USERS
  const auth = getAuth(app);

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
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
      </div>
      <div className="signIn mt-4 bg-white">
        <h2 className="font-bold pb-3">Sign In</h2>
        <div className="form">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              borderColor: "red",
            }}
          />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {message}
          </span>

          <h5 className="mt-4">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              borderColor: "red",
            }}
          />
        </div>
        <button
          className="w-full bg-red-500 p-2 round my-4"
          onClick={() => signIn()}
        >
          SIGN IN
        </button>
        <p>
          By continuing, you agree to Brequet's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="createAccount">
        <hr />
        <p className="text-center">New to Brequet?</p>
        <hr />
        <Link to="/createaccount">
          <button className="w-full bg-secondary p-2 round">
            CREATE ACCOUNT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
