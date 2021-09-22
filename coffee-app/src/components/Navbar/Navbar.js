import React, { Component } from 'react';
import { MenuItemsLeft } from "./MenuItemsLeft";
import { MenuItemsRight } from "./MenuItemsRight";
import { MenuItemsBurger } from "./MenuItemsBurger";
import logo from "../img/VGLogoNew.png"
import './Navbar.css'
import { Link } from "react-router-dom";
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.navToggle = this.navToggle.bind(this);
    }

    navToggle(e) {
        e.stopPropagation();
        this.setState({
            open: !this.state.open
        });
        console.log(this.state.open)
      }

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
                {this.state.open && <AiOutlineCloseCircle className="Hamburger-close" onClick={this.navToggle}/> }
                {this.state.open && <ul className="Hamburger-menu">
                <ul className="Hamburger-items">      
                    {MenuItemsBurger.map((item, index) => {
                        return (
                            <li className="nav-links-burger" key={index}>
                                <Link className={item.cNameB} to={item.url} onClick={this.navToggle}>
                                    {item.title} 
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </ul>
                }
                <GiHamburgerMenu className="burger" onClick={this.navToggle}/>
            </nav>
        )
    }
}
export default Navbar
