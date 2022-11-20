import './App.css';
import React from 'react';
import ProductPage from './components/ProductPage';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product/:id' element={<ProductPage />} replace />
      </Routes>
    </Router>
  );
}

export default App;