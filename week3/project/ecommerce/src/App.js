import './App.css';
import React from 'react';
import ProductPage from './components/Products/ProductPage';
import HomePage from './views/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { FavsProvider } from './components/Favorites/FavsContext';
import Favorites from './components/Favorites/Favorites';
import Products from './components/Products/Products';


function App() {
  return (
    <FavsProvider>
    <Router>
      <Routes>
          <Route path='/' element={<HomePage />}>
            <Route path=':category' element={<Products />} />
          </Route>          
          <Route path='product/:id' element={<ProductPage />} replace />
          <Route path='favorites' element={<Favorites/>} />
      </Routes>
    </Router>
    </FavsProvider>
  );
}

export default App;