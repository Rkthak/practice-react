import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate("/register");
  };
  const gotoLogin = () => {
    navigate("/login");
  };
  return (
    <div className="p-5">
      <button
        className="bg-red-500 px-2 py-0.5 font-medium text-white mr-7"
        onClick={gotoRegister}
      >
        Register
      </button>
      <button
        className="bg-red-500 px-2 py-0.5 font-medium text-white mr-7"
        onClick={gotoLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
