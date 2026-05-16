import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [registerMessage, setRegisterMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Registering user....`;
    setRegisterMessage(message);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="container m-auto p-2">
      <h1 className="font-semibold mb-2">REGISTER PAGE</h1>

      {registerMessage ? (
        registerMessage
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">submit</button>
        </form>
      )}

      <p className="mt-2">
        already have account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default Register;
