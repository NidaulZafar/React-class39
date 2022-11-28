import React from 'react';
import { Link } from 'react-router-dom';

const ProductSingle = ({ product }) => {
    const path = `/product/${product.id}`;

    return (
        <li className='product-item' key={product.id}>
            <Link className='product' to={path}>
                <img className='product-image' src={product.image} alt='product' />
                <span className='product-title'>{product.title}</span>
            </Link>
        </li>
    );
}

export default ProductSingle;