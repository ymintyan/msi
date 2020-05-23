import React from 'react';
import Joke from './Joke';
import './JokesList.css';

function JokesList(props) {
    const {jokes, errorMsg, setFavJokes} = props;
    console.log({jokes})

    if (errorMsg) return <div className="error-message">{errorMsg}</div>
    
    return jokes.result ? ( jokes.total ? (
        <div className="jokes-list">
            {jokes.result.map((joke)=>{
                return <Joke data={joke} key={joke.id} setFavJokes={setFavJokes} />
            })}
        </div>
    ) : <div className="error-message">No results</div>)
    : <div className="jokes-list">
        <Joke data={jokes} setFavJokes={setFavJokes} />    
    </div>;
}

export default JokesList;