import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Chicago } from './components/Chicago';
import { Specials } from './components/Specials';
import { BookingPage } from './components/BookingPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/order" element={<BookingPage />} />
        <Route path="/login" element={<BookingPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
