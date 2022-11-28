import React, {useState} from 'react';
import useFetch from '../hooks/useFetch';
import CategoryButton from './CategoryButton';
import loading from '../assets/loading.svg';

const Nav = ({ setCategory }) => {
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(undefined);
    let url = `https://fakestoreapi.com/products/categories`;
    const { error, isLoading } = useFetch(url, setCategories);

    const getSelectedCategory = e => {
        const selectedCategory = e.target.innerText;
        const selectedId = e.target.id;
        setCategory(selectedCategory);
        setSelected(selectedId);
    }

    return (
        <div className='categories'>
            {isLoading ? <img src={loading} alt='Loading.. Please wait' /> : error ? <h2>{error}</h2> :
                <>
                    {categories.map((category, index) => {
                        return (
                            <CategoryButton
                                key={index}
                                selectedCategory={{
                                index,
                                category,
                                clickHandler: getSelectedCategory,
                                    selected,
                                }}
                            />
                        );
                    })}
                </>
            }
        </div>
    )
}

export default Nav;