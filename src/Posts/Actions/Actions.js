import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const POSTS_PATH = '/posts';
const API_KEY = 'my-key-asdf-1234';
const KEY_QUERY_PARAM = `key=${API_KEY}`

export default function fetchPosts() {
    const request = axios.get(`${ROOT_URL}${POSTS_PATH}?${KEY_QUERY_PARAM}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(post) {
    const request = axios.post(`${ROOT_URL}${POSTS_PATH}?${KEY_QUERY_PARAM}`, post);

    return {
        type: CREATE_POST,
        payload: request
    }
}