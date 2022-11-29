import React from 'react';
import { NavLink } from 'react-router-dom';
import FavIcon from './FavoriteIcon';

const ProductSingle = ({ product }) => {
    const path = `/product/${product.id}`;

    return (
        <li className='product-item' key={product.id}>
            <NavLink to={path}>
                <div className='product'>
                <div className='product-image--container'>
                <img className='product-image' src={product.image} alt='product' />
                        <FavIcon productID={product.id} />
                        </div>
                <span className='product-title'>{product.title}</span>
                </div>
            </NavLink>
        </li>
    );
}

export default ProductSingle;