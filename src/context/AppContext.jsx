import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe', bio: 'Just another user' });
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ user, theme, setUser, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};