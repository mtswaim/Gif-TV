import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
      <Link to='/' >
        <li> Home </li>
      </Link>
      <Link to='about'>
        <li>About</li>
      </Link>
    </div>
  )
} 