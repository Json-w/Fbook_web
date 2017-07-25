import React from 'react';
import { SearchBar } from '../SearchBar'
import Button from '../Button'
import Link from '../Link'
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
        <div className="Header-btn-group">
          <Link text="登录" path="/login"/>
          <Link text="注册" path="/register"/>
        </div>
      </div>
    </div>);
}
