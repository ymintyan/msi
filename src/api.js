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