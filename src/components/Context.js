import React, { createContext, useState } from "react";

let contextObj = {
  profile: {},
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
