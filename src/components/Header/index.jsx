import React from 'react';
import { SearchBar } from '../SearchBar'
import './index.css'

export const Header = ({onSearch, searchKeyWords = ''})=> {
  return (
    <div className="Header">
      <div className="Header-content">
        <span className="Header-title">
          <h1>图书分享</h1></span>
        <SearchBar
          onHandleSearch={onSearch}
          searchKeyWords={searchKeyWords}/>
      </div>
    </div>);
}
