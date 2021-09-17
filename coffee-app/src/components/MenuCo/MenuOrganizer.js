import React from 'react'
import Card from './Card'
import './MenuOrganizer.css'
import bgvideo from "../video/SlowBeans.m4v"
import Banner from './Banner'
import { Specialties } from "./menulists/specialties";

const Menu = () => {
    return (
        <div className='MenuComponents'>
            <span className="spacer">Spacer</span>
            <Banner heading="Seasonal Specials"/>
            <div className="menulistings">
            {Specialties.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <Banner heading="Classic Coffees"/>
            <div className="menulistings">
            {Specialties.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <Banner heading="Teas"/>
            <div className="menulistings">
            {Specialties.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <Banner heading="Other Drinks"/>
            <div className="menulistings">
            {Specialties.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <video autoPlay loop muted>
                    <source src={bgvideo} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Menu
