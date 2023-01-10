import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/details/${data.name}`, { state: data });
  };
  return (
    <button onClick={handleRoute} type="button" className="country-card">
      <div className="img">
        <img className="country-img" src="{data.flag}" alt="Flag of country" />
      </div>
      <div className="detail">
        <h2>{data.name}</h2>
        <p>
          population: <span>{data.population}</span>
        </p>
      </div>
    </button>
  );
};

export default Country;
