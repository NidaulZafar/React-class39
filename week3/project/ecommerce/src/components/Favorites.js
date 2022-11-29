import React, { useState } from "react";
import { useFavs } from "./FavsContext";
import useFetch from "../hooks/useFetch";
import Header from "../views/Header";
import ProductSingle from "./ProductSingle";
import loading from '../assets/loading.svg';

const Favorites = () => {
    const [products, setProducts] = useState([]);
    const { favoritesArray: favsIdArray } = useFavs();

    const url = 'https://fakestoreapi.com/products';
    const { error, isLoading } = useFetch(url, setProducts);

    const favorites = products.filter(product => {
        return favsIdArray.includes(product.id);
    });

    return (
        <>
            {isLoading ? <img src={loading} alt='Loading.. Please wait' /> : error ? <h2>{error}</h2> :
                <div className="">
                    <Header />
                    <h2>Favorites</h2>
                    {favorites.length <= 0 ?
                        <h2>No Favorites!</h2> :
                        <div>
                            <ul className="">
                                {favorites.map(product =>
                                    <ProductSingle key={product.id} product={product} />
                                )}
                            </ul>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Favorites;