import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/pages/AboutPage';
import { BookingPage } from './components/pages/BookingPage';
import { ConfirmedBooking } from './components/ConfirmedBooking';
import HomePage from './components/pages/HomePage';
import { SignUpPage } from './components/pages/SignUpPage';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

function App() {
  return (
    <React.Fragment>
      <Header>
        <Nav />
      </Header>
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
      <Footer>
        <Nav />
      </Footer>
    </React.Fragment>
  );
}

export default App;
