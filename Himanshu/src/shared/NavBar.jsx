import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
      <div className='container'>
          <div className='Logo'>
            <Link to="/"><h1>Himanshu</h1></Link>
          </div>
          <div className='navlist'>
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">Qustion Page</NavLink></li>
            </ul>
            </div>
        </div> 
    </header>
  )
}

export default NavBar