import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
