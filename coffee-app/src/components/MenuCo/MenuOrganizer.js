import React from 'react'
import Card from './Card'
import './MenuOrganizer.css'
import bgvideo from "../video/SlowBeans.m4v"
import Banner from './Banner'

import { Specialties } from "./menulists/specialties";
import { Coffees } from "./menulists/coffees";

const Menu = () => {
    return (
        <div className='MenuComponents'>
            <span className="spacer">Spacer</span>
            <Banner heading="Seasonal Specials"></Banner>
            <div className="menulistings">
            {Specialties.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <Banner heading="Classic Coffees"></Banner>
            <div className="menulistings">
            {Coffees.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <Banner heading="Teas"></Banner>
            <div className="menulistings">
            {Specialties.map((item, index) => {
                        return (
                            <Card name={item.drink} image={item.image} description={item.description}/>
                        )
                    })}
            </div>
            <Banner heading="Other Drinks"></Banner>
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
