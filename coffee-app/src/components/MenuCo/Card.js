import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='CardComponents'>
            <div className="cardheader">
                <h3>{props.name}</h3>
            </div>
            <div className="cardimage">
                <img src={props.image} alt=""></img>
            </div>
            <div className="cardtext">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card