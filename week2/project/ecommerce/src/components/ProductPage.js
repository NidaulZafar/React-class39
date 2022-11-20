import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FetchData from './FetchData';
import loading from './loading.gif';


const ProductPage = () => {
    const [prodDetails, setProdDetails] = useState({});
    const params = useParams();
    const url = `https://fakestoreapi.com/products/${params.id}`;
    const { error, isLoading } = FetchData(url, setProdDetails);
    return (
        <>
            {
                isLoading ? <img src={loading} alt='Loading.. Please wait' /> : error ? <h2>{error}</h2> : 
                    <div className='product-details'>
                        <div className='title-container'>
                    <h1>{prodDetails.title}</h1>
                        </div>
                        <div className='product-details-information'>
                            <div className='product-details-image'>
                                <div className='product-image-container'>
                                    <img className='product-image' src={prodDetails.image} alt={prodDetails.title} />
                                </div>
                            </div>
                            <p className='product-details-description'>{prodDetails.description}</p>
                            </div>
                    <h2>{`Price: ${prodDetails.price} $`}</h2>
                    <Link className="" to="/">
                        Home page
                            </Link>
                </div>
            }
                    
        </>
    )
}

export default ProductPage