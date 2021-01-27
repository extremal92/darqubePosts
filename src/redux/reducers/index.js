import { combineReducers } from 'redux';

import booksReducer from './books';
import favorite from './favorite';


const rootReducer = combineReducers({
  books: booksReducer,
  favorite
})

export default rootReducer;