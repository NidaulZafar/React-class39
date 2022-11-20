import React from 'react';

const CategoryButton = ({ selectedCategory }) => {
    const { category, index, selected, clickHandler } = selectedCategory;
    return (
        <button
            key={category}
            id={index}
            className={+selected === index ? `categories-item categories-item-selected` : "categories-item"} onClick={clickHandler}>
            {category}
        </button>
    );
}

export default CategoryButton;


