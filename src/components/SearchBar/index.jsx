import React, { Component } from 'react'
import './index.css'
import searchIcon from '../../assets/icon-search.svg'

export class SearchBar extends Component {

  constructor(props) {
    super();
    this.keywords = '';
  }

  handleSearch = (keyWords)=> {
    const {onHandleSearch}=this.props;
    if (keyWords !== '') {
      onHandleSearch(keyWords);
    }
  }

  render() {
    return (
      <form onSubmit={(e)=> {
        e.preventDefault();
        this.handleSearch(this.keywords);
      }}>
        <div className="searchBar">
          <input
            type="text"
            size="22"
            onChange={(e)=> {
              this.keywords = e.target.value;
            }}
            placeholder="书名、作者、ISBN"/>
          <span className="searchBar-Icon" onClick={()=> {
            this.handleSearch(this.keywords)
          }}><img src={searchIcon} alt="search"/></span>
        </div>
      </form>
    );
  }
}

