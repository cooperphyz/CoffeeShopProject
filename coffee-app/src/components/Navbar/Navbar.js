import React, { Component } from 'react';
import { MenuItemsLeft } from "./MenuItemsLeft";
import { MenuItemsRight } from "./MenuItemsRight";
import logo from "../img/VavaGroundsLogoGradientCrop.png"

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon">
                </div>
                <ul>
                    {MenuItemsLeft.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="navbar-logo">
                    <img src={logo} height="200px" alt="Logo" />
                </div>
                <ul>
                    {MenuItemsRight.map((item, index) => {
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
export default Navbar
