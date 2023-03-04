import React, { createContext, useState, useContext } from "react";

const NavigateContext = createContext();

export const useNavigate = () => {
  return useContext(NavigateContext);
};

const NavigationGuide = ({ children }) => {
  const [getID, setGETID] = useState("Home");

  const value = {
    getID,
    setGETID,
  };
  return (
    <NavigateContext.Provider value={value}>
      {children}
    </NavigateContext.Provider>
  );
};
export default NavigationGuide;
