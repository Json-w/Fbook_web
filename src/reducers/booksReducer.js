export const booksReducer = (state = [], action)=> {
  switch (action.type) {
    case "UPDATE_BOOKS_ON_STATE":
      return action.payload.data;
    default:
      return state;
  }
}
