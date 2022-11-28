import React, {useState} from 'react';
import ProductSingle from './ProductSingle';
import useFetch from '../hooks/useFetch';
import loading from '../assets//loading.svg';

const Products = ({ category }) => {
    const [products, setProducts] = useState([]);
    const url = category === '' ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${category}`;
    const { error, isLoading } = useFetch(url, setProducts);
    return (
        <>
            {isLoading ? <img src={loading} alt='Loading...' />
                : error ? <h2>{error}</h2>
                : <ul className="product-list">
                    {products.map((product) => {
                        return <ProductSingle key={product.id} product={product} />;
                    })}
                </ul>
            }
        </>
    )
}


export default Products;