import React from 'react';

const ProductSingle = (props) => {
    return (
        <li className='product-item' key={props.product.id}>
            <div className='product'>
                <img className='product-image' src={props.product.image} alt='product' />
                <span className='product-title'>{props.product.title}</span>
            </div>
        </li>
    );
}

export default ProductSingle;