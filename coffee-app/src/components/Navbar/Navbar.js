import React, { Component } from 'react';
import { MenuItemsLeft } from "./MenuItemsLeft";
import { MenuItemsRight } from "./MenuItemsRight";
import logo from "../img/VavaGroundsLogoGradientCrop.png"
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon">
                </div>
                <ul className="Navbar-menu-left">
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
                    <a href={'/#'}><img src={logo} height="150px" alt="Logo" /></a>
                </div>
                <ul className="Navbar-menu-right">
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
