import { combineReducers } from 'redux';

import BooksReducer from '../Book/Reducers/BooksReducer';
import PostsReducer from '../Posts/Reducers/PostsReducer'

const rootReducer = combineReducers({
    books: BooksReducer,
    posts: PostsReducer
});

export default rootReducer;