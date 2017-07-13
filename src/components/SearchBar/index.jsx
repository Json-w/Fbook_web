import React from 'react'
import './index.css'
import searchIcon from '../../assets/icon-search.svg'


export const SearchBar = ()=> {
  return(
    <div className="searchBar">
      <input type="text" size="22" placeholder="书名、作者、ISBN"/>
      <span className="searchBar-Icon" onClick={()=>{console.log("clicked")}}><img src={searchIcon} alt="search"/></span>
    </div>
  );
}