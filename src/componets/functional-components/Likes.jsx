import React, { useState } from "react";

const Likes = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in ..", "\t", email, "\t", password);
  };
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 p-5 border-gray-300 m-4 rounded shadow shadow-gray-500 "
    >
      <h2 className="font-bold text-2xl text-green-700 md:text-center">
        Login
      </h2>
      <div>
        <input
          type="email"
          name={email}
          id="email"
          placeholder="email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="password"
          name={password}
          id="password"
          placeholder="password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white text-center capitalize p-2 rounded cursor-pointer"
      >
        submit
      </button>
    </form>
  );
};

export default Likes;
