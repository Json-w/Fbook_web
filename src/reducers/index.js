import { combineReducers } from 'redux';
import  { booksReducer } from './booksReducer'

const searchReducer = (state = {searchKeyWords: ""}, action)=> {
  switch (action.type) {
    case 'SEARCH_BOOKS':
      return {
        searchKeyWords: action.payload,
        searchResults: ['123', '234']
      };


    default:
      return state || {searchKeyWords: "123"};
  }
}

const rootReducer = combineReducers({
  search: searchReducer,
  books: booksReducer,
})

export default rootReducer;