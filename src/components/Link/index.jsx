import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import './index.css'

const Link = ({text, path})=> {
  return (
    <div className="link">
      <ReactRouterLink to={path}>
        {text}
      </ReactRouterLink>
    </div>
  );
}

export default Link;