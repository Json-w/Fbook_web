import React from 'react'
import './index.css'
const defaultPageItems = 10
const Pagination = ({total, onChange, pageItems = defaultPageItems, currentPage = 1})=> {
  const pages = parseInt(total / pageItems) + 1;
  let numArrary = [];
  for (let i = 0; i < pages; i++) {
    numArrary[i] = i + 1;
  }

  let handlePrevClick = ()=> {
    if (currentPage - 1 > 0) {
      onChange(currentPage - 1, pageItems)
    }
  }

  let handleNextClick = ()=> {
    if (currentPage + 1 <= pages) {
      onChange(currentPage + 1, pageItems)
    }
  }

  return (
    <div className="pagination">
      <ul>
        <li className="pagination-prev">
          <a onClick={handlePrevClick}></a>
        </li>
        {
          numArrary.map((e, i)=> {
            return <li key={i} className={currentPage === e ? "currentPage" : ""}>
              <a onClick={()=> {
                onChange(e, pageItems)
              }}> {e}</a>
            </li>
          })
        }
        <li className="pagination-next">
          <a onClick={handleNextClick}></a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;