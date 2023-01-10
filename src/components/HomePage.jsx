import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../redux/api';
import { IconName } from 'react-icons/fa';

const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(api());
    }
  }, [dispatch, countries.length]);

  const selectedCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
      country.region.toLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <header className="home-container">
        <div className="search-logo">
          <IconName className="search-Icon" />
        </div>
        <div className="input-search">
          {' '}
          <input
            type="text"
            name="searchItem"
            placeholder="search for a country"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
