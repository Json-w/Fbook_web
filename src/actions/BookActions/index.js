import Api from '../../api/BooksApi'

export const fetchBooks = (offset = 0, limit = 20)=> {
  return (dispatch, getState)=> {
    Api.fetchBooks(offset, limit).then((json)=> {
      dispatch(updateBooksOnState(json));
    });
  }
}

export const updateBooksOnState = (data, currentPage = 1)=> {
  return {
    type: "UPDATE_BOOKS_ON_STATE",
    payload: {
      data: data.result,
      totalCount: data.totalCount,
      currentPage: currentPage,
    }

  }
}

export const fetchBooksByPage = (page, pageSize)=> {
  return (dispatch, getState)=> {
    let offset = (page - 1) * pageSize;
    Api.fetchBooks(offset, pageSize).then((json)=> {
      dispatch(updateBooksOnState(json, page))
    })
  }
}