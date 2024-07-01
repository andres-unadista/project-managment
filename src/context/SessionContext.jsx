import React, { createContext, useState } from 'react';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [statusSession, setStatusSession] = useState(false);

  const setSessionStatus = (status) => {
    setStatusSession(status);
  };

  return (
    <SessionContext.Provider value={{ statusSession, setSessionStatus }}>
      {children}
    </SessionContext.Provider>
  );
};