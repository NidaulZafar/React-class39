import React from 'react';
import { NavLink } from 'react-router-dom';
import FavIcon from '../Favorites/FavoriteIcon';

const ProductSingle = ({ product }) => {
    const path = `/product/${product.id}`;

    return (
        <li className='product-item' key={product.id}>
            <NavLink to={path}>
                <div className='product'>
                <div className='product-image--container'>
                        <FavIcon productID={product.id} />
                <img className='product-image' src={product.image} alt='product' />
                        </div>
                <span className='product-title'>{product.title}</span>
                </div>
            </NavLink>
        </li>
    );
}

export default ProductSingle;