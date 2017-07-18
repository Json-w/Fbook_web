export default{
  fetchBooks: (offset = 0, limit = 10)=> {
    return fetch('http://182.254.228.128:3000/books?offset='
                + offset + '&limit=' + limit).then((response)=> {
      return response.json();
    })
  }
};