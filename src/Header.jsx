import React, { useState } from 'react';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header>
      <h1>Not Tweeter</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search untweets..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;