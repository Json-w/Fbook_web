import Api from '../../api/BooksApi'

export const fetchBooks = (offset = 0, limit = 20)=> {
  return (dispatch, getState)=> {
    Api.fetchBooks(offset, limit).then((json)=> {
      dispatch(updateBooksOnState(json));
    });
  }
}

export const updateBooksOnState = (data, searchKeyWords = '', currentPage = 1)=> {
  return {
    type: "UPDATE_BOOKS_ON_STATE",
    payload: {
      data: data.result,
      totalCount: data.totalCount,
      currentPage: currentPage,
      searchKeyWords: searchKeyWords,
    }

  }
}

export const fetchBooksByPage = (page, pageSize, searchKeywords = '')=> {
  return (dispatch, getState)=> {
    let offset = (page - 1) * pageSize;
    Api.fetchBooks(offset, pageSize, searchKeywords).then((json)=> {
      dispatch(updateBooksOnState(json, searchKeywords, page))
    })
  }
}
