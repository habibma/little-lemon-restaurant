import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { BookingPage } from './components/BookingPage';
import { ConfirmedBooking } from './components/ConfirmedBooking';
import HomePage from './components/HomePage';
import { SignUpPage } from './components/SignUpPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<HomePage />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/order" element={<ConfirmedBooking />} />
        <Route path="/login" element={<SignUpPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
