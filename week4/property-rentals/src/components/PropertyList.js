import React, {useState} from 'react'
import useFetch from './Hooks/useFetch';
import loading from '../assets/loading.svg';
import { useAppContext } from './context/useAppContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faToilet } from '@fortawesome/free-solid-svg-icons'




const PropertyList = () => {

    const [rentals, setRentals] = useState([]);
    const { id } = useParams();

    const url = id === undefined ?
        `https://example-data.draftbit.com/properties?_limit=10` :
        id === '1' ?
            `https://example-data.draftbit.com/properties?_sort=bedrooms&_order=asc&_limit=10` :
            id === '2' ?
                `https://example-data.draftbit.com/properties?_sort=bedrooms&_order=asc&_start=3&_limit=10` :
                `https://example-data.draftbit.com/properties?_sort=bedrooms&_order=desc&_limit=10`;

    const { error, isLoading } = useFetch(url, setRentals);
    
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    const favoritesChecker = (id) => {
        const boolean = favorites.some(rental => rental.id === id);
        return boolean;
    }

    
  return (
      <div>
          <>
            {isLoading ? <img src={loading} alt='Loading...' />
                : error ? <h2>{error}</h2>
                      :
                      <div className='properties'>
                          {rentals.map((rental) => (
                              <>
                          <div className='outer-container'>
                              <div className="property-container" key={rental.id} style={{ backgroundImage: `url(${rental.image_url})` }}>
                                      <div className='overlay' onClick={() => navigate(`/properties/${rental.id}`)}></div>
                                  <h2 className='property-title'>{rental.name}</h2>
                                  
                                        </div>
                                      <div className='lower-div'>
                                          <div className='max-users'>
                                          <FontAwesomeIcon icon={faUsers} style={{ color: 'gray', fontSize: '15px' }} /><span> {rental.maxGuests}</span>
                                          </div>
                                          <div className='bathrooms'>
                                              <FontAwesomeIcon icon={faToilet} style={{ color: 'gray', fontSize: '15px' }} /><span> {rental.bathrooms}</span>
                                          </div>
                                              <div className='nightly-price'>
                                                  <h4>&#x20AC;{rental.nightly_price} / night</h4>
                                                  </div>
                                          </div>
                                      {favoritesChecker(rental.id) ? 
                                          <button onClick={() => removeFromFavorites(rental.id)}>
                                              Unlike
                                          </button>
                                              : <button onClick={() => addToFavorites(rental)}>Like</button>
                                          }
                          </div>
                                  </>
                          ))}
                          </div>
            }
        </>
    </div>
  )
}

export default PropertyList