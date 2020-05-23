import React from 'react';
import Joke from './Joke';

function Favourites(props) {
    const {jokes,setFavJokes} = props;

    const handleClick = e => {
        document.getElementById('favourite-inner').classList.toggle('show');
    };

    return (
        <div>
            <div className="favourite-secondary-title">Favourite</div>
            <div className="favourite-menu-btn" onClick={handleClick}></div>
            <div id="favourite-inner" className="favourite-inner">
                <div className="favourite-inner-wrapper">
                <div className="favourite-menu-btn" onClick={handleClick}></div>
                <div className="favourite-secondary-title">Favourite</div>
                    <h3 className="favourite-title">
                        Favourite
                    </h3>
                    {
                        jokes.length ? 
                        <div>
                            {jokes.map(joke => {
                                return <Joke data={joke} setFavJokes={setFavJokes} isCustomStyle={true} key={joke.id} />
                            })
                            }
                        </div> :
                        null
                    }
                </div>
            </div>
        </div>  
    );
}

export default Favourites;