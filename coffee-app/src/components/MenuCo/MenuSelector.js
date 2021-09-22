import React, { Component } from 'react';
import './MenuSelector.css'
import {MenuOptions} from './MenuOptions'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

class MenuSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuopen: false
        };

        this.menuToggle = this.menuToggle.bind(this);
    }
    menuToggle(e) {
        e.stopPropagation();
        this.setState({
            menuopen: !this.state.menuopen,
            open: !this.state.open
        });
      }

    render () {
    return (
        <div className='BannerItems'>
            <div className = 'menuheading'>
            {MenuOptions.map((item, index) => {
                        return (
                            <div className="menu-listings">
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                            </div>
                        )
                    })}
                <h1>{this.props.heading}</h1>
            </div>
            {!this.state.menuopen && <GiHamburgerMenu className ="burgerme" onClick={this.menuToggle}/>}
            {this.state.menuopen && <AiOutlineCloseCircle className="Hamburger-close-menu" onClick={this.menuToggle}/> }
            {this.state.menuopen && <div className ="burger-menu-menu">
                {MenuOptions.map((item, index) => {
                        return (
                            <div className="burger-menu-listings">
                            <li key={index} className="nav-links-burger-menu">
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                            </div>
                        )
                    })}
                </div>}
        </div>
    )
}
}


export default MenuSelector
