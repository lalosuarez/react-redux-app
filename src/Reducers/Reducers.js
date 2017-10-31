import { combineReducers } from 'redux';

import BooksReducer from '../Book/Reducers/BooksReducer';
import PostsReducer from '../Posts/Reducers/PostsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    books: BooksReducer,
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;