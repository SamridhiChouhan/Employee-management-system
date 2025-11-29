import React, { useState } from "react";

const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">User 👋🏻</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white py-2 px-5 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
