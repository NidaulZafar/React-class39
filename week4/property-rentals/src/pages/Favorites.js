import React from 'react';
import { useAppContext } from '../components/context/useAppContext';

const Favorites = () => {
	const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const favoritesChecker = (id) => {
        const boolean = favorites.some(rental => rental.id === id);
        return boolean;
    }
return (
	<div>
		<h1>Favorites</h1>
		{favorites.length > 0 ? favorites.map((rental) => (
                              <div key={rental.id}>
                                  <div><h2>{rental.name}</h2></div>
                                  <div><img src={rental.image_url} alt='rental' /></div>
                                  <div>
                                  {favoritesChecker(rental.id) ? 
                                          <button onClick={() => removeFromFavorites(rental.id)}>Remove From Favorites</button>
                                          : <button onClick={() => addToFavorites(rental)}>Add to Favorites</button>
                                  
                                }
                                      
                                  </div>
                              </div>
                              
                          )) : <h1>Nothing yet!</h1>}
	</div>
);
};

export default Favorites;
