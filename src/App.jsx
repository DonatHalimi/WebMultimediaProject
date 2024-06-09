import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { ToTop } from './components/ToTop';
import Preloader from './components/Preloader';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import { ToastContainer } from 'react-toastify';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <ToTop />
      <ToastContainer />
      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
