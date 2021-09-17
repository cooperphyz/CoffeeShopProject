import React from 'react'
import Card from './Card'
import './MenuOrganizer.css'

const MenuOrganizer = (props) => {
    return (
        <div className='MenuComponents'>
            <div className="menulistings">
            {props.menutext.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
        </div>
    )
}

export default MenuOrganizer
