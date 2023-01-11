import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/details/${data.name}`, { state: data });
  };

  return (
    <button type="button" onClick={handleRoute} className="country">
      <div className="div-country">
        <img className="image" src={data.flag} alt="" />
        <div className="details">
          <h2 className="country-h2">{data.name}</h2>
          <p country-para>
            <span>Capital</span> {data.capital}
          </p>
          <p>
            <span>Population</span> {data.population}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Country;
