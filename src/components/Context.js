import React, { createContext, useState } from "react";

let contextObj = {
  url :{
   home: "/",
   login: "/login",
  },
  profile: {},
  isLogged: false,
};

export const AppContext = createContext(contextObj);

export default function AppProvider({ children }) {
  const [isTest, setIsTest] = useState("it is not");

  contextObj.isTest = isTest;
  contextObj.setIsTest = setIsTest;

  return (
    <AppContext.Provider value={contextObj}>{children}</AppContext.Provider>
  );
}
