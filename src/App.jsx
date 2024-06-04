import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { ToTop } from './components/ToTop';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <ToTop />
      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
