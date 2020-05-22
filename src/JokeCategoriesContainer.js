import React from 'react';
import SingleCategory from './SingleCategory';

import './JokeCategoriesContainer.css';

function JokeCategoriesContainer(props) {
    const {categories, selectedCategories, isVisible, handleCategorySelecting} = props;
    return isVisible ? (
        <div className='categories-list show'>
            {
            categories.map((item)=>{
                const categoriesKeys = Object.keys(selectedCategories);
                const selected = categoriesKeys.includes(item);
                return <SingleCategory selected={selected} selectHandler={handleCategorySelecting} data={item} key={item} />;
            })
            }
        </div>
    ) 
    : null;
}

export default JokeCategoriesContainer;