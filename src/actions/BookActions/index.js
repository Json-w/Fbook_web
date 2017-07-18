import Api from '../../api/BooksApi'

export const fetchBooks = (offset = 0, limit = 20)=> {
  return (dispatch, getState)=> {
    Api.fetchBooks(offset, limit).then((json)=> {
      dispatch(updateBooksOnState(json.result));
    });
  }
}

export const updateBooksOnState = (data)=> {
  return {
    type: "UPDATE_BOOKS_ON_STATE",
    payload: {
      data: data
    }
  }
}