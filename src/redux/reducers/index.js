import { combineReducers } from 'redux';

import books from './books';
import favorite from './favorite';


const rootReducer = combineReducers({
  books,
  favorite
})

export default rootReducer;