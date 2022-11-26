import React, {useState} from 'react';
import allCategories from '../fake-data/all-categories';
import allProducts from '../fake-data/all-products';
import CategoryButton from './CategoryButton';
import Products from './Products';

const Categories = () => {
    const [productsList, setProductsList] = useState(allProducts);
    const [selected, setSelected] = useState(() => { return '' });
    const sortProductsByCategory = e => {
        if (e.target.id === selected) {
            setProductsList(allProducts);
            setSelected({});
        } else {
            const selectedCategoryId = e.target.id;
            setSelected(selectedCategoryId);
            const purifiedCategory = allCategories[selectedCategoryId].replace("FAKE: ", "");
            setProductsList(allProducts.filter(product => { return product.category === purifiedCategory; }))
        }
    }

    return (
        <>
            <div className='categories'>
                {allCategories.map((category, index) => {
                    return (
                        <CategoryButton
                            key={index}
                            selectedCategory={{
                                index,
                                category,
                                clickHandler: sortProductsByCategory,
                                selected
                            }}
                        />
                    );
                })}
            </div>
            <Products productsList={productsList} />
        </>
    );
}

export default Categories;