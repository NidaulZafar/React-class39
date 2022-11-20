import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Products from './Products';

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