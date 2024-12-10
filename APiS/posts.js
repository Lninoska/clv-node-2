const apiURL = 'https://jsonplaceholder.typicode.com/users/1/posts'

const posts = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}

module.exports = { posts }