import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li>
          <Link to="/whiskies">Whiskies</Link>
        </li>
        
        <li >
          <Link to="/distilleries">Distilleries</Link>
        </li>
        

      </ul>
    </header>
  )
}

export default NavBar;
