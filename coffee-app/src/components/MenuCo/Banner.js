import React from 'react'
import LeftDivider from '../img/LeftDivider.png'
import RightDivider from '../img/RightDivider.png'
import './Banner.css'

const Banner = (props) => {
    return (
        <div className='BannerItems'>
            <div className = 'heading'>
                <img src = {LeftDivider} alt='' className ='dividerleft'></img>
                <h1>{props.heading}</h1>
                <img src = {RightDivider} alt='' className ='dividerright'></img>
            </div>

        </div>
    )
}

export default Banner
