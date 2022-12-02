import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './Hooks/useFetch';
import loading from '../assets/loading.svg';
import { useAppContext } from './context/useAppContext';



const PropertyDetails = () => {
    const [rental, setRental] = useState({});
    const { id } = useParams();

    const bookURL = `https://example-data.draftbit.com/properties/${id}`;
    const { error, isLoading } = useFetch(bookURL, setRental);

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const favoritesChecker = (id) => {
        const boolean = favorites.some(rental => rental.id === id);
        return boolean;
    }

    
  return (
      <div>
          <h2>Property Details</h2>
            {isLoading ? <img src={loading} alt='Loading...' />
                : error ? <h2>{error}</h2>
                  : <>
                      <h2>{rental.name}</h2>
                      <img src={rental.image_url} alt='rental' />
                      <h4>&#x20AC;{rental.nightly_price} / night</h4>
                      <h3>Max Guests</h3>
                      <h4>{rental.maxGuests}</h4>
                      <h3>Description</h3>
                      <p>{rental.description}</p>
                      <div>
                                  {favoritesChecker(rental.id) ? 
                                          <button onClick={() => removeFromFavorites(rental.id)}>Remove From Favorites</button>
                                          : <button onClick={() => addToFavorites(rental)}>Add to Favorites</button>
                                  
                                }
                                      
                                  </div>
                </>
            }
      </div>
  )
}

export default PropertyDetails;


