import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import BookCardList from "../../components/BookCardList";
import { fetchBooks, fetchBooksByPage } from "../../actions/BookActions";
import Pagination from '../../components/Pagination'

class Home extends Component {
  componentWillMount() {
    this.props.fetchBooks(0, 18);
  }

  render() {
    const {onSearch, searchKeyWords, bookCardList, onPageChange, totalCount, currentPage}=this.props;
    return (
      <div>
        <Header onSearch={onSearch} searchKeyWords={searchKeyWords}/>
        <BookCardList bookCards={bookCardList}/>
        <Pagination total={totalCount}
                    onChange={onPageChange}
                    pageItems={18}
                    currentPage={currentPage}/>
      </div>)
  }
}

const mapDispatchToProps = {
  onSearch: (keyWords)=> {
    return fetchBooksByPage(1, 18, keyWords);
  },
  fetchBooks: (offset, limit)=> {
    return fetchBooks(offset, limit);
  },
  onPageChange: (page, pageSize)=> {
    return fetchBooksByPage(page, pageSize);
  }
}

const mapStateToProps = (state)=> {
  console.log('home' + state)
  return {
    searchKeyWords: state.search.searchKeyWords,
    bookCardList: state.books.data,
    totalCount: state.books.totalCount,
    currentPage: state.books.currentPage,
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);