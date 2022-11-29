import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='title-container'>
                <h1 className='title-container--title'>Products</h1>
                <div className='nav'>
                    <Link className='nav-link' to='/'>
                        Products
                    </Link>
                    <Link className='nav-link' to='/favorites'>
                        Favorites
                    </Link>
                </div>
        </div>
    )
}

export default Header;