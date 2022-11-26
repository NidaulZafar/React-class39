import React from 'react';

const ProductSingle = ({ product }) => {
    const { id, image, title } = product;
    return (
        <li className='product-item' key={id}>
            <div className='product'>
                <img className='product-image' src={image} alt='product' />
                <span className='product-title'>{title}</span>
            </div>
        </li>
    );
}

export default ProductSingle;