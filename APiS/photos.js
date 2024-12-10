const apiURL = 'https://jsonplaceholder.typicode.com/albums/1/photos'

const photos = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}

module.exports = { photos }