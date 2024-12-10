const apiURL = 'https://jsonplaceholder.typicode.com/posts/1/comments'

const comments = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}

module.exports = { comments }