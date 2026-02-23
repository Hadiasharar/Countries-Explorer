import React from 'react';

const REGIONS = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ region, setRegion }) => {
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      aria-label="Filter by region"
    >
      {REGIONS.map((r) => (
        <option key={r} value={r}>
          {r === 'all' ? 'All Regions' : r}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;