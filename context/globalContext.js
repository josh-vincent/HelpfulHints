import React, {useState, createContext} from 'react';

export const globalContext = createContext();

export const GlobalContext = ({children}) => {
  const [number, setNumber] = useState(0);
  
  const addFunction = ( value ) => {
      setNumber(number + value)
  }


  return (
    <GlobalContext.Provider value={{number, setNumber, addFunction}}>
      {children}
    </GlobalContext.Provider>
  );
};
