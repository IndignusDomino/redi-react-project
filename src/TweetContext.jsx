import React, { createContext, useState } from 'react';

const TweetContext = createContext();

const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  // Add other global state values here (e.g., user data, theme)

  return (
    <TweetContext.Provider value={{ tweets, setTweets, searchTerm, setSearchTerm }}>
      {children}
    </TweetContext.Provider>
  );
};

export { TweetContext, TweetProvider };