import React from 'react';
import Country from './Country';

const CountriesList = () => (
  <div>
    <div className="countries" />
    <div className="countries" />
    {CountriesList.map((countryData) => (
      <Country data={countryData} key={countryData.name} />
    ))}
  </div>
);

export default CountriesList;
