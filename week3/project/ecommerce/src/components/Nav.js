import React, {useState} from 'react';
import useFetch from './hooks/useFetch';
import CategoryButton from './CategoryButton';
import loading from '../assets/loading.svg';

const Nav = () => {
    const [categories, setCategories] = useState([]);
    const url = `https://fakestoreapi.com/products/categories`;
    const { error, isLoading } = useFetch(url, setCategories);

    return (
        <div className='categories'>
            {isLoading ? <img src={loading} alt='Loading.. Please wait' /> : error ? <h2>{error}</h2> :
                <>
                    {categories.map((category, index) => {
                        return (
                            <CategoryButton
                                key={index} category={category}/>
                        );
                    })}
                </>
            }
        </div>
    )
}

export default Nav;