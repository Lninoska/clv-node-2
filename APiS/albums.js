const apiURL = 'https://jsonplaceholder.typicode.com/users/1/albums'

const albums = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}

module.exports = { albums }