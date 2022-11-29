import React from 'react';
import Header from '../views/Header';
import Nav from '../components/Nav';
import Products from '../components/Products/Products';

const HomePage = () => {
    return (
        <>        
            <Header />
            <Nav />
            <Products />
        </>
    )
}

export default HomePage;