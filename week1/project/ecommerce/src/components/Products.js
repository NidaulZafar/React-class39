import React from 'react';
import ProductSingle from './ProductSingle';

const Products = ({productsList}) => {
    return (
        <ul className='product-list'>
            {productsList.map((product, index) => {
                return <ProductSingle key={index} product={product} />
            })}
        </ul>
    );
}

export default Products;