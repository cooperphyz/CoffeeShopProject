import React from 'react'
import LeftDivider from '../img/LeftDivider.png'
import RightDivider from '../img/RightDivider.png'
import './MenuSelector.css'
import {MenuOptions} from './MenuOptions'

import { Link } from 'react-router-dom';

const Banner = (props) => {
    return (
        <div className='BannerItems'>
            <div className = 'menuheading' style={{backgroundColor: "lightblue"}}>
            {MenuOptions.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                <h1>{props.heading}</h1>
            </div>

        </div>
    )
}

export default Banner
