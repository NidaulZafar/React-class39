import React, { useState } from 'react';
import Header from '../views/Header';
import Nav from '../components/Nav';
import Products from '../components/Products';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <div className='App'>
            <Header />
            <Nav setCategory={setSelectedCategory} />
            <Products category={selectedCategory} />
        </div>
  )
}

export default HomePage;