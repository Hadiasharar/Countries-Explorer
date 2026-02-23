import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img
        src={country.flags?.svg || country.flags?.png}
        alt={`Flag of ${country.name?.common || 'Unknown'}`}
        width={120}
      />
      <h3>{country.name?.common || 'Unknown'}</h3>
      <p>Region: {country.region || 'N/A'}</p>
      <p>
        Population:{' '}
        {country.population != null
          ? country.population.toLocaleString()
          : 'N/A'}
      </p>
    </div>
  );
};

export default CountryCard;