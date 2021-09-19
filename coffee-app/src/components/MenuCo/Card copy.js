import React from 'react'
import './Card.css'
import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
    
    return (
        <div className='CardComponents'>
            <div className="cardfront">
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
            <div className="cardback">
                <h5>Calories: {props.calories}</h5>
                <h5>Fat: {props.fat}</h5>
                <h5>Cholesterol: {props.cholesterol}</h5>
                <h5>Sodium: {props.sodium}</h5>
                <h5>Carbohydrates: {props.carbohydrates}</h5>
                <h5>Sugar: {props.sugar}</h5>
                <h5>Protein: {props.protein}</h5>
                <h5>Caffeine: {props.caffeine}</h5>
                <h6>Substitutions are available upon request</h6>
                <h6>*2,000 calories a day is used for general nutrtion</h6>
            </div>
        </div>
    )
}

export default Card
