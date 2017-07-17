import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../../components/Header'
import BookCard from '../../components/BookCard'
import BookCardList from '../../components/BookCardList'

class Home extends Component {
  render() {
    const bookcardList = [
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },
      {
        imgUrl: "https://img1.doubanio.com/lpic/s29493608.jpg",
        imgAlt: "十六夜膳房",
        title: "十六夜膳房",
        author: "毛無",
      },

    ]
    const {onSearch, searchKeyWords}=this.props;
    return (
      <div>
        <Header onSearch={onSearch} searchKeyWords={searchKeyWords}/>
        <BookCardList bookCards={bookcardList}/>
      </div>)
  }
}

const mapDispatchToProps = {
  onSearch: (keyWords)=>({
    type: 'SEARCH_BOOKS',
    payload: keyWords,
  })
}

const mapStateToProps = (state)=> {
  console.log(state)
  return {
    searchKeyWords: state.search.searchKeyWords,
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);