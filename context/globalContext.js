import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
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
