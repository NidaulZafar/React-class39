import React from 'react';

const CategoryButton = ({selectedCategory}) => {
    return (
        <button
            key={selectedCategory.category}
            id={selectedCategory.index}
            className={+selectedCategory.selected === selectedCategory.index ? `categories-item categories-item-selected` : "categories-item"} onClick={selectedCategory.clickHandler}>
            {selectedCategory.category}
        </button>
    );
}

export default CategoryButton;