export default{
  fetchBooks: (offset = 0, limit = 10, name = '')=> {
    let baseUrl = 'http://182.254.228.128:3000/books?offset='
      + offset + '&limit=' + limit;
    if (name !== '') {
      baseUrl = baseUrl + '&name=' + name
    }
    return fetch(baseUrl).then((response)=> {
      return response.json();
    })
  },
};