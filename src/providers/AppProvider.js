import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);

  return (
    <AppContext.Provider
      value={{
        x,
        setX,
        y,
        setY,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useApp };
