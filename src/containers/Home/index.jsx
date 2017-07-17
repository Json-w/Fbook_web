import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../../components/Header'

class Home extends Component {

  render() {
    const {onSearch, searchKeyWords}=this.props;
    return <Header onSearch={onSearch} searchKeyWords={searchKeyWords}/>
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