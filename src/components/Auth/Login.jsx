import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("hello");
    handleLogin(email, password);
    console.log("email is :", email, "& password is :", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col justify-center"
        >
          <input
            required
            className="text-white outline-none border-2 bg-transparent border-emerald-600 py-2 px-4 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="text-white outline-none border-2 bg-transparent border-emerald-600 py-2 px-4 mt-3 text-xl rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="text-white outline-none border-2 border-none bg-emerald-600 py-2 px-5 mt-7 text-xl rounded-full hover:bg-emerald-700">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
