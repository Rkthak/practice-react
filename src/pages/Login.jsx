import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  selectEmail,
  selectPassword,
  setEmail,
  setPassword,
} from "../Redux/Fearures/loginSlice";

const Login = () => {
  // handling form with redux
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [registerMessage, setRegisterMessage] = useState("");
  const handleLogin = (e) => {
    console.log(`logged in with email:- ${email}`);

    e.preventDefault();
    const message = `Logging In....`;
    setRegisterMessage(message);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  return (
    <>
      <div className="p-5">
        <h1 className="font-semibold mb-2">LOGIN PAGE</h1>
        {registerMessage ? (
          registerMessage
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              type="tpassword"
              placeholder="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            <button type="submit">submit</button>
          </form>
        )}

        <p className="mt-2">
          New user? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
