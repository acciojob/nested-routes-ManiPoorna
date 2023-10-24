import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
      </ul>
    </div>
  )
}

export default Home