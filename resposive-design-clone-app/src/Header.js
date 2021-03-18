import React from 'react';

function Header(){
  return (
    <header>
      <h3>
        Start Bootstrap
      </h3>
      
      <nav>
        <img src='https://i.pinimg.com/564x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg' alt='menu' onClick='appear' />
        <ul>
          <li>
            Services
          </li>
          <li>
            Portfolio
          </li>
          <li>
            Team
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header;