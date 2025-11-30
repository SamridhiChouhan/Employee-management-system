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
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
