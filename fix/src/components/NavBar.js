import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/whiskies">Whiskies</Link>
        </li>
        
        <li className="navLink">
          <Link to="/distilleries">Distilleries</Link>
        </li>
        

      </ul>
    </header>
  )
}

export default NavBar;
