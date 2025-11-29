import React, { createContext, useState, useEffect } from "react";
import getLocalStorage from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  // setLocalStorage();
  // localStorage.clear();

  let data = getLocalStorage();
  console.log(data);

  useEffect(() => {
    // first
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
