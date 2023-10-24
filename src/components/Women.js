import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Women = () => {
  return (
    <div>
      <p>Women Items: </p>
      <ul>
        <li><Link to="/women/grooming">Grooming</Link> </li>
        <li><Link to="/women/shirt">Shirt</Link></li>
        <li><Link to="/women/trouser">Trousers</Link></li>
        <li><Link to="/women/jewellery">Jewellery</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Women