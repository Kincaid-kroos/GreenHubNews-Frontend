import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go Back...</Link>
    </div>
  )
}

export default Notfound