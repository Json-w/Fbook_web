import React from 'react'
import './index.css'

const Pagination = ({total, onChange, defaultPageItems = 10, currentPage = 1})=> {
  const pages = total / defaultPageItems;
  let numArrary = [];
  for (let i = 0; i < pages; i++) {
    numArrary[i] = i + 1;
  }
  return (
    <div className="pagination">
      <ul>
        <li className="pagination-prev">
          <a></a>
        </li>
        {
          numArrary.map((e, i)=> {
            return <li className={currentPage === e ? "currentPage" : ""}>
              <a> {e}</a>
            </li>
          })
        }
        <li className="pagination-next">
          <a></a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;