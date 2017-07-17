import React, { Component } from 'react'
import './index.css'
import searchIcon from '../../assets/icon-search.svg'

export class SearchBar extends Component {

  constructor(props) {
    super();
    this.searchInput;
    this.state = {
      searchKeywords: props.searchKeyWords,
    }
  }

  handleSearch = ()=> {
    const {onHandleSearch}=this.props;
    if (this.searchInput.value !== '') {
      console.log(this.searchInput.value)
      onHandleSearch(this.searchInput.value);
    }
  }

  render() {
    return (
      <form onSubmit={(e)=> {
        e.preventDefault();
        this.handleSearch();
      }}>
        <div className="searchBar">
          <input
            ref={(input)=> {
              this.searchInput = input;
            }}
            type="text"
            size="22"
            onChange={(e)=> {
              console.log(e.target.value)
              this.setState({
                searchKeywords: e.target.value,
              })
            }}
            value={this.state.searchKeyWords}
            placeholder="书名、作者、ISBN"/>
          <span className="searchBar-Icon" onClick={this.handleSearch}><img src={searchIcon} alt="search"/></span>
        </div>
      </form>
    );
  }
}

