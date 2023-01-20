import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar " style={{ backgroundColor: '#eb1414' }} role="navigation" aria-label="main navigation">
      <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" href="">
          <img src="./logo.jpeg" width="50" height="90" alt='' />
        </Link>
    
        <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className='navbar-item'>Home</Link>
            
          
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
             
              <Link to={"/logout"} className="button is-warning">Log Out</Link>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar