import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='CardComponents'>
            <div className="cardheader">
                <h3>{props.name}</h3>
            </div>
            <div className="cardimage">
                <img class="cardimage" src={props.image} alt=""></img>
            </div>
            <div>
                <p className="cardtext">{props.description}</p>
            </div>
        </div>
    )
}

export default Card
