import React from 'react';

const CategoryButton = ({ props }) => {
    const { category, index, selected, clickHandler } = props;
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