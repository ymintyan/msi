const apiUrl = 'https://api.chucknorris.io/jokes';

export function getJoke(type, data) {
    const {searchText, selectedCategories} = data;
    console.log({selectedCategories})
    let path = '';
    switch(type) {
        case 'random':
            path = '/random';
            break;
        case 'category':
            const category = Object.keys(selectedCategories).join(','); 
            path = `/random?category=${category}`;
            break;
        case 'search':
            path = `/search?query=${searchText}`;
            break;
    }
    return fetch(`${apiUrl}${path}`);
}

export function getJokeCategories() {
    return fetch(`${apiUrl}/categories`);
}

export function getFavouriteJokesFromLS(){
    const jokes = localStorage.getItem('favourite_jokes');
    
    if(!jokes) {
        return [];
    }

    return JSON.parse(jokes);
}

export function setFavouriteJokesToLS(jokes){
    const jokesFromLS = getFavouriteJokesFromLS();
    
    if(!jokesFromLS.length) {
        localStorage.setItem('favourite_jokes', JSON.stringify(jokes))
    } else {
        const jokesUpdated = [...jokes];
        localStorage.setItem('favourite_jokes', JSON.stringify(jokesUpdated));
    }
}