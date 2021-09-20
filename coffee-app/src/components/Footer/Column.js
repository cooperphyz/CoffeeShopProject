import React from 'react'

import './Column.css' 

const Column = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <div className='columnlinks'>
            <a href="/#" className = 'links'>{props.icon1}{props.link1}</a>
            <p className = 'links'>{props.icon2}{props.link2}</p>
            <a href="/#" className = 'links'>{props.icon3}{props.link3}</a>
            </div>
        </div>
    )
}

export default Column
