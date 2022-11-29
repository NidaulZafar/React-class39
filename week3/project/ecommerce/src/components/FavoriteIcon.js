import React from "react";
import regHeart from '../assets/heart-regular.svg';
import solidHeart from '../assets/heart-solid.svg';
import {useFavs} from './FavsContext';

const FavIcon = ({ productID }) => {
    const { favoritesArray: favsIdArray, updateFavs } = useFavs();
    return (
        <div className='product-image--favourite-container' onClick={()=>updateFavs(productID)}>
            <img className="product-image--favourite" src={favsIdArray.includes(productID) ? solidHeart : regHeart} id={productID} alt='fav icon' />
        </div>
    )
}

export default FavIcon;