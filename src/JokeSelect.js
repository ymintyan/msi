import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import SearchInput from './SearchInput';
import BtnWrapper from './BtnWrapper';
import JokeCategoriesContainer from './JokeCategoriesContainer';
import {getJoke} from './api';

import './JokeSelect.css';

function JokeSelect(props) {
    const {setApiJokes, jokeCategories, setErrorMsg} = props;
    const [jokeType, setJokeType] = useState('random');
    
    const [categories, setCategories] = useState({});

    const [searchText, setSearchText] = useState('');

    const [controlsVisibility, setControlsVisibility] = useState({
        category: false,
        search: false
    })
    console.log('init joke select')

    const handleCategorySelecting = (category) => {
        const selectedCategories = {...categories};
        console.log('st',{category,categories,selectedCategories},selectedCategories.hasOwnProperty(category))
        
        if(categories.hasOwnProperty(category)) {
            delete selectedCategories[category];
            setCategories({...selectedCategories});
            console.log('if',{category,categories,selectedCategories})
            return;
        }
        selectedCategories[category] = true;
        setCategories({...selectedCategories});
        console.log('e',{category,categories,selectedCategories})
    };

    const handleInput = (e) => {
        setSearchText(e.target.value);
    };
    
    console.log('pp',{props});
    
    const handleChange = (e) => {
        console.log(e.target);
        setJokeType(e.target.value);

        if(e.target.value === 'random') setControlsVisibility({
            category: false,
            search: false
        });
        
        if(e.target.value === 'category') setControlsVisibility({
            search: false, 
            category: true
        })

        if(e.target.value === 'search') setControlsVisibility({
            category: false, 
            search: true
        })
    };

    const handleClick = (e) => {
        console.log('CLICK', categories)
        const jokes = getJoke(jokeType, { searchText,selectedCategories:categories }).then(
            response => response.json())
        .then(
            response => {
                if(!response.error) {
                    setApiJokes(response);
                    setErrorMsg('');
                } else {
                    setErrorMsg(response.message);
                }
                return response;
            }
        );
        console.log(jokes);
    };
    return (
        <div>
            <FormControl component="fieldset" fullWidth={true}>
                <RadioGroup name="jokeType" value={jokeType} onChange={handleChange}>
                    <FormControlLabel value="random" control={<Radio className='custom-color' />} label="Random" />
                    <FormControlLabel value="category" control={<Radio className='custom-color' />} label="From categories" />
                    <JokeCategoriesContainer handleCategorySelecting={handleCategorySelecting} isVisible={controlsVisibility.category} selectedCategories={categories} categories={jokeCategories} />
                    <FormControlLabel value="search" control={<Radio className='custom-color' />} label="Search" />
                    <SearchInput handleInput={handleInput} isVisible={controlsVisibility.search} />
                </RadioGroup>
            </FormControl>
            <BtnWrapper handleClick={handleClick} />
        </div>
    );
}

export default JokeSelect;