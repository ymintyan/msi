import React from 'react';
import Joke from './Joke';
import './JokesList.css';

function JokesList(props) {
    const {jokes, errorMsg, setFavJokes, favJokes} = props;
    
    const isSearchedJokeInFav = joke => {
        
        for (let i = 0; i < favJokes.length; i++) {
            if(joke.id === favJokes[i].id) {
                return true;
            } 
        }
        return false;
    };

    if (errorMsg) return <div className="error-message">{errorMsg}</div>
    
    return jokes.result ? ( jokes.total ? (
        <div className="jokes-list">
            {jokes.result.map((joke)=>{
                return <Joke data={joke} key={joke.id} isSearchedJokeInFav={isSearchedJokeInFav(joke)} setFavJokes={setFavJokes} />
            })}
        </div>
    ) : <div className="error-message">No results</div>)
    : <div className="jokes-list">
        <Joke data={jokes} isSearchedJokeInFav={isSearchedJokeInFav(jokes)} setFavJokes={setFavJokes} />    
    </div>;
}

export default JokesList;