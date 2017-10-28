import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const POSTS_PATH = '/posts';
const API_KEY = 'my-key-asdf-1234';

export default function fetchPosts() {
    const request = axios.get(`${ROOT_URL}${POSTS_PATH}?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}