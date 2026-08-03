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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/questionpage">Qustion Page</Link></li>
            </ul>
            </div>
        </div> 
    </header>
  )
}

export default NavBar