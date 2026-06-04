import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  selectEmail,
  selectName,
  selectPassword,
  setEmail,
  setPassword,
  setUserName,
} from "../Redux/Fearures/registerSlice";

const Register = () => {
  // handling form with redux
  const userName = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
// -----end------
  
  const navigate = useNavigate();
  const [registerMessage, setRegisterMessage] = useState("");

  const handleSubmit = (e) => {
    console.log(`registered user with email:- ${email}`);

    e.preventDefault();
    const message = `Registering user....`;
    setRegisterMessage(message);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="p-5">
      <h1 className="font-semibold mb-2">REGISTER PAGE</h1>

      {registerMessage ? (
        registerMessage
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={userName}
            onChange={(e) => dispatch(setUserName(e.target.value))}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <button type="submit">submit</button>
        </form>
      )}

      <p className="mt-2">
        already have account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};;

export default Register;
