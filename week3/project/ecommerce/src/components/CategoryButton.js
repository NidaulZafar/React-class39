import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryButton = ({ category }) => {
    const categoryParams = useParams();
    
    return (
        <Link id={category} to={`/${category}`} key={category} className={categoryParams.category === category ? categoryParams.category !== undefined ? `categories-item categories-item-selected` : `categories-item` : `categories-item` }
        >
            {category}
        </Link>
    );
}

export default CategoryButton;


