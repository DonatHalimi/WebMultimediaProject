import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Home } from './components/Home';
import { ToTop } from './components/ToTop';
import Preloader from './components/Preloader';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import ProductsByCategory from './components/ProductsByCategory';
import Blog from './components/Blog';
import CursorEffect from './components/CursorEffect';
import About from './components/About';
import { Contact } from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <CursorEffect />
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
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/products/on-ear" element={<ProductsByCategory category="On-ear" />} />
            <Route path="/products/earbuds" element={<ProductsByCategory category="Earbuds" />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
