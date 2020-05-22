import React, {useState,useEffect} from 'react';
import './App.css';
import JokesList from './JokesList';
import JokeSelect from './JokeSelect';
import Favourites from './Favourites';
import {getJokeCategories, getFavouriteJokesFromLS} from './api';

function App() {
  const [apiJokes, setApiJokes] = useState([]);
  const [apiCategories, setApiCategories] =  useState([]);
  const [reqErrorMsg, setErrorMsg] = useState('');
  const favouriteJokesFromLS = getFavouriteJokesFromLS();
  const [favouriteJokes, setFavJokes] = useState(favouriteJokesFromLS);
  

  useEffect(function(){
    getJokeCategories()
    .then(
      (response) => response.json()
    )
    .then(
      (response) => {
        if(!apiCategories.length) setApiCategories(response);
      }
    )}, [])

  return (
    <div className="container">
      <div className="main-wrapper">
        <h2 className="main-title">MSI 2020</h2>
        <p className="greeting-title">Hey!</p>
        <p className="greeting-text">Let’s try to find a joke for you:</p>
        <JokeSelect setApiJokes={setApiJokes} setErrorMsg={setErrorMsg} jokeCategories={apiCategories} />
        <JokesList jokes={apiJokes} favJokes={favouriteJokes} setFavJokes={setFavJokes} errorMsg={reqErrorMsg}/>
      </div>
      <div className="favourites-wrapper">
        <Favourites jokes={favouriteJokes} setFavJokes={setFavJokes}/>
      </div>
    </div>
  );
}

export default App;
