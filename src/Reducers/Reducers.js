import { combineReducers } from 'redux';

import BooksReducer from '../Book/Reducers/BooksReducer';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;