export const booksReducer = (state = {data: []}, action)=> {
  switch (action.type) {
    case "UPDATE_BOOKS_ON_STATE":
      return action.payload;
    default:
      return state;
  }
}
