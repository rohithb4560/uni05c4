import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AllData from './AllData';
import Query from './Query.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<AllData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
