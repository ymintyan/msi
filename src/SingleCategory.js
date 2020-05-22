import React, {useState} from 'react';
import classNames from 'classnames';

function SingleCategory(props) {
    const {data, selectHandler, selected} = props;
    const [isSelected, toggleState] = useState({selected})
    const styles = classNames('single-category', { selected: isSelected.selected});
    
    const handleClick = (e) => {
        e.stopPropagation();
        console.log(isSelected);
        toggleState({selected: !isSelected.selected});
        selectHandler(data);
    };
    return (
        <div className={styles} onClick={handleClick}>
            {data}
        </div>
    );
}

export default SingleCategory;