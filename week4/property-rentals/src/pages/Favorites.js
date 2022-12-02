import React from 'react';
import { useAppContext } from '../components/context/useAppContext';
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
	<>
		<h1>Favorites</h1>
	<div className='properties'>
		{favorites.length > 0 ? favorites.map((rental) => (
			<div className='outer-container'>
				<div className="property-container" key={rental.id} style={{ backgroundImage: `url(${rental.image_url})` }}>
					<h2 className='property-title'>{rental.name}</h2>
						<div className='overlay' onClick={() => navigate(`/properties/${rental.id}`)}></div>
					
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
                          )) : <h1>Nothing yet! Browse our collection of rentals and save what you like.</h1>}
	</div>
						  </>
);
};

export default Favorites;
