import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import BookCardList from "../../components/BookCardList";
import { fetchBooks } from "../../actions/BookActions";

class Home extends Component {

  componentWillMount() {
    this.props.fetchBooks(0, 18);
  }

  render() {
    const {onSearch, searchKeyWords, bookCardList}=this.props;
    return (
      <div>
        <Header onSearch={onSearch} searchKeyWords={searchKeyWords}/>
        <BookCardList bookCards={bookCardList}/>
      </div>)
  }
}

const mapDispatchToProps = {
  onSearch: (keyWords)=>({
    type: 'SEARCH_BOOKS',
    payload: keyWords,
  }),
  fetchBooks: (offset, limit)=> {
    return fetchBooks(offset, limit)
  },
}

const mapStateToProps = (state)=> {
  console.log('home' + state)
  return {
    searchKeyWords: state.search.searchKeyWords,
    bookCardList: state.books,
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);