import React, {useState} from 'react'
import useFetch from '../../components/Hooks/useFetch';
import loading from '../../assets/loading.svg';
import { useParams } from 'react-router-dom';
import Rental from '../../components/Rental';


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
    
    return (
        <div className='property-list-main'>
            {isLoading ? <img src={loading} alt='Loading...' /> : error ?
                <h2>{error}</h2> :
                <div className='properties'>
                    {rentals.map((rental) => (
                        <Rental property={rental} />
                    ))}
                </div>                
            }            
        </div>
    )
}

export default PropertyList