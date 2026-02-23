import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';
import CountryCard from './components/CountryCard';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('all');
  const [sortByPop, setSortByPop] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = '';

        if (search.length >= 2) {
          url = `https://restcountries.com/v3.1/name/${search}`;
        } else if (region !== 'all') {
          url = `https://restcountries.com/v3.1/region/${region}`;
        } else {
          url = 'https://restcountries.com/v3.1/all';
        }

        const response = await fetch(url);

        if (response.status === 404) {
          setCountries([]);
          return;
        }

        if (!response.ok) throw new Error('Failed to fetch countries');

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [search, region, retryCount]);

  const displayed = sortByPop
    ? [...countries].sort((a, b) => (b.population || 0) - (a.population || 0))
    : countries;

  const handleClearFilters = () => {
    setSearch('');
    setRegion('all');
    setSortByPop(false);
  };

  return (
    <div className="app">
      <h1>Countries Explorer</h1>

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <RegionFilter region={region} setRegion={setRegion} />
        <button
          className={sortByPop ? 'active' : ''}
          onClick={() => setSortByPop((prev) => !prev)}
        >
          {sortByPop ? '↓ Population' : 'Sort by Population'}
        </button>
        <button onClick={handleClearFilters}>Clear Filters</button>
      </div>

      {loading && <p>Loading countries...</p>}

      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={() => setRetryCount((c) => c + 1)}>Retry</button>
        </div>
      )}

      {!loading && !error && countries.length === 0 && (
        <p>No results found</p>
      )}

      {!loading && !error && displayed.length > 0 && (
        <div className="countries-list">
          {displayed.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;