import React from 'react';
import { Component } from "react";

class Header extends Component(){
  constructor(props){
    super(props)


    this.state = {
      open: false
    }
  }
  
  clickHandler = () => {
    this.setState({open: !this.state.open})
  }
  


  render(){
  return (
    <header>
      <h3>
        Start Bootstrap
      </h3>
      
      <nav>
        <img src='https://i.pinimg.com/564x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg' alt='menu' onClick={clickHandler} />
        <ul className ={open ? 'opened':'closed'}>
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
}


export default Header;