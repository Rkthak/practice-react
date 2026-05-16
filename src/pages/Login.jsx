import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [registerMessage, setRegisterMessage] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const message = `Logging In....`;
    setRegisterMessage(message);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  return (
    <>
      <div className="container m-auto p-2">
        <h1 className="font-semibold mb-2">LOGIN PAGE</h1>
        {registerMessage ? (
          registerMessage
        ) : (
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="email" />
            <input type="tpassword" placeholder="password" />
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
