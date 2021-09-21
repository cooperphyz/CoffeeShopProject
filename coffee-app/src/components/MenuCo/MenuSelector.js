import React, { Component } from 'react';
import './MenuSelector.css'
import {MenuOptions} from './MenuOptions'

import { Link } from 'react-router-dom';

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
            open: !this.state.open
        });
        console.log(this.state.open)
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
            {!this.state.menuopen && <div className ="burgerme" onClick={this.menuToggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
            </div>
                }
        </div>
    )
}
}


export default MenuSelector
