import React from 'react'
import Card from './Card'
import './MenuOrganizer.css'

const MenuOrganizer = (props) => {
    return (
        <div className='MenuComponents'>
            <div className="menulistings">
            {props.menutext.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}
                            calories={item.calories} fat={item.fat} cholesterol={item.cholesterol} sodium={item.sodium}
                            carbohydrates={item.carbohydrates} sugar={item.sugar} caffeine={item.caffeine}/>
                        )
                    })}
            </div>
        </div>
    )
}

export default MenuOrganizer
