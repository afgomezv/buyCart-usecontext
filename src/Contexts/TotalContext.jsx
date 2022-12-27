import { createContext, useState } from "react";

export const TotalContext = createContext();

export const TotalContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};
