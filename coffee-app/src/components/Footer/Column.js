import React from 'react'

import './Column.css' 

const Column = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <div className='columnlinks'>
            <a href="/#" className = 'links'>{props.link1}</a>
            <p className = 'links'>{props.link2}</p>
            <a href="/#" className = 'links'>{props.link3}</a>
            </div>
        </div>
    )
}

export default Column
