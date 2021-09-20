import React, { Component } from 'react';
import { MenuItemsLeft } from "./MenuItemsLeft";
import { MenuItemsRight } from "./MenuItemsRight";
import logo from "../img/VGLogoNew.png"
import './Navbar.css'
import { Link } from "react-router-dom";


class Navbar extends Component {
    showSettings (event) {
        event.preventDefault();
      }
    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon">
                </div>
                <ul className="Navbar-menu-left">
                    {MenuItemsLeft.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="navbar-logo">
                    <a href={'/'}><img src={logo} height="150px" alt="Logo" /></a>
                </div>
                <ul className="Navbar-menu-right">
                    {MenuItemsRight.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className="Hamburger-menu">
                <ul className="Hamburger-items">
                    {MenuItemsLeft.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cNameB} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                     {MenuItemsRight.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cNameB} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </ul>
            </nav>
        )
    }
}
export default Navbar
