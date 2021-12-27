import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}  
        </ul>
      </nav>
    )
  }
}

export default Navbar;