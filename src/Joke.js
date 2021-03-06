import React from 'react';
import date from './date';

import {setFavouriteJokesToLS,getFavouriteJokesFromLS} from './api';
import './Joke.css';

function Joke({data, setFavJokes, isCustomStyle, isSearchedJokeInFav}) {
    const {
        updated_at,
        value,
        url,
        id,
        categories
    } = data;

    const handleClick = e => {
        const jokesFromLS = getFavouriteJokesFromLS();
        let isRepeated = false;
        jokesFromLS.forEach(joke => {
            if(joke.id === id) isRepeated = true;
        })
        
        if(isRepeated){
            const jokes = getFavouriteJokesFromLS();
            let indexToDelete;
            jokes.forEach((joke,i) => {
               if(joke.id === id) {
                   indexToDelete = i;
               }
            })

            jokes.splice(indexToDelete,1);
        
            setFavouriteJokesToLS(jokes);
            setFavJokes(jokes);
        } else {
            const jokesFromLS = getFavouriteJokesFromLS();
            jokesFromLS.push(data);
            setFavouriteJokesToLS(jokesFromLS);
            const jokes = getFavouriteJokesFromLS();
            setFavJokes(jokes);
        }
        
    };
    
    if(data.length === 0) return null;
    
    const updatedHrsAgo = date(updated_at);
    
    return (
        <div className={isCustomStyle ? "joke-wrapper-fav" : "joke-wrapper"}>
           <div className="joke-link">
                ID: <a href={`${url}`} target="_blank">{id}</a>
           </div>
           <div className={ isCustomStyle || isSearchedJokeInFav ? "joke-favourite-selected" : "joke-favourite"} onClick={handleClick}></div>
           <div className="joke-value">
                {value}
           </div>
           <div className="joke-footer">
               <div className="joke-updatedAt">
                {`Last update: ${updatedHrsAgo} hours ago`}
                </div>
                <div className="joke-categories">
                    {
                        categories.length ? 
                        categories.map(cat => {
                            return <div className="category-item" key={cat}>{cat}</div>
                        }) : null
                    }
                </div>
           </div>
           
        </div>
    );
}

export default Joke;