import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Search countries"
    />
  );
};

export default SearchBar;