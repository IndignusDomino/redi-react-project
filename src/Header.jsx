import React, { useState, useContext } from 'react';
import { TweetContext } from '../TweetContext'; // Assuming you create a TweetContext

function Header() {
  const { setSearchTerm } = useContext(TweetContext);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setSearchTerm(event.target.value); 
  };

  return (
    <header className="header">
      <h1>My Twitter Clone</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
      />
    </header>
  );
}

export default Header;