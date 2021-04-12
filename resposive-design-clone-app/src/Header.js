import React, { Component} from 'react';
// import { Component } from "react";

class Header extends Component{
  constructor(){
    super();

    this.state = {
      menu: 'closed',

    }
  }
  
  clickHandler = () => {
    if(this.state.menu === 'closed'){
      this.setState({menu : 'open'})
      console.log(`the menu is now ${this.state.menu}`)
    } 
    if(this.state.menu === 'open'){
      this.setState({menu: 'closed'})
      console.log(`the menu is now ${this.state.menu}`)
    }
  }
  


  render(){
    return (
      <header>
        <h3>
          Start Bootstrap
        </h3>
        
        <nav>
          <img src='https://i.pinimg.com/564x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg' alt='menu' onClick= {this.clickHandler} />
          <ul className ={this.state.menu}>
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