import React from 'react';
import { useAppContext } from '../components/Hooks/useAppContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faToilet } from '@fortawesome/free-solid-svg-icons'



const Favorites = () => {
	const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
	const navigate = useNavigate();

    const favoritesChecker = (id) => {
        const boolean = favorites.some(rental => rental.id === id);
        return boolean;
    }
return (
	<div className='property-list-main'>
	<div className='properties'>
		{favorites.length > 0 ? favorites.map((rental) => (
			<div className='outer-container'>
				<div className="property-container" key={rental.id} style={{ backgroundImage: `url(${rental.image_url})` }}>
					<div className='overlay' onClick={() => navigate(`/properties/${rental.id}`)}>
						
					<h2 className='property-title'>{rental.name}</h2>
						</div>
					
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
							<button className='button' onClick={() => removeFromFavorites(rental.id)}>
								Unlike
							</button>
								: <button className='button' onClick={() => addToFavorites(rental)}>Like</button>
							}
				</div>
                          )) : <h3 className='no-favorites'>Nothing yet! Browse our collection of rentals and save what you like.</h3>}
	</div>
						  </div>
);
};

export default Favorites;
