import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import loading from '../../assets/loading.svg';
import FavIcon from '../Favorites/FavoriteIcon';



const ProductPage = () => {
    const [prodDetails, setProdDetails] = useState({});
    const productID = prodDetails.id;
    const params = useParams();
    const url = `https://fakestoreapi.com/products/${params.id}`;
    const { error, isLoading } = useFetch(url, setProdDetails);
    return (
        <div className='product-details'>
            {
                isLoading ? <img src={loading} alt='Loading.. Please wait' /> : error ? <h2>{error}</h2> : 
                    <>
                        <div className='title-container'>
                        <h1 className='title-container--title'>{prodDetails.title}</h1>
                        <div className='nav'>
                    <Link className='nav-link' to='/'>
                        Products
                    </Link>
                    <Link className='nav-link' to='/favorites'>
                        Favorites
                    </Link>
                        </div>
                        </div>
                        <div className='product-details-information'>
                            <div className='product-details-image'>
                                <div className='product-image-container'>
                                    <img className='product-image' src={prodDetails.image} alt={prodDetails.title} />
                        <FavIcon productID={productID} />
                                </div>
                            </div>
                            <p className='product-details-description'>{prodDetails.description}</p>
                            </div>
                    <h2>{`Price: ${prodDetails.price} $`}</h2>
                        </>
            }
                    
            </div>
    )
}

export default ProductPage