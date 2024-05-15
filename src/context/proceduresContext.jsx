import { createContext, useContext, useState } from "react";

const ProceduresContext = createContext({
  savedProcedures: [],
  setSavedProcedures: () => {},
});

export const useProcedures = () => useContext(ProceduresContext);

export const ProceduresContextProvider = ({ children }) => {
  const [savedProcedures, setSavedProcedures] = useState([]);

  return (
    <ProceduresContext.Provider value={{ savedProcedures, setSavedProcedures }}>
      {children}
    </ProceduresContext.Provider>
  );
};
