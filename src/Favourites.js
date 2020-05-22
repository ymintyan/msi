import React from 'react';
import Joke from './Joke';

function Favourites(props) {
    const {jokes,setFavJokes} = props;
    console.log({ls: jokes})
    return (
        <div>  
            <h3 className="favourite-title">
                Favourite
            </h3>
            {
                jokes.length ? 
                <div>
                    {jokes.map(joke => {
                        console.log('jj',joke);
                    return <Joke data={joke} setFavJokes={setFavJokes} isCustomStyle={true} key={joke.id} />
                    })
                    }
                
                </div> :
                null
            }
        </div>  
    );
}

export default Favourites;