import React, { useState } from "react";

const Likes = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in ..", "\t", email, "\t", password);
  };
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          name={email}
          id="email"
          placeholder="email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
};

export default Likes;
