import React from 'react';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <a href="/whiskies">Whiskies</a>
        </li>
        
        <li className="navLink">
          <a href="/distilleries">Distilleries</a>
        </li>
        

      </ul>
    </header>
  )
}

export default NavBar;
