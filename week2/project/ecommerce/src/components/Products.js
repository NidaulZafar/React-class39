import React, {useState} from 'react';
import ProductSingle from './ProductSingle';
import FetchData from './FetchData';
import loading from './loading.gif';

const Products = ({ category }) => {
    const [products, setProducts] = useState([]);
    let url = '';
    if (category === '') {
        url = `https://fakestoreapi.com/products`;
    } else {
        url = `https://fakestoreapi.com/products/category/${category}`;
    }
    const { error, isLoading } = FetchData(url, setProducts);
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