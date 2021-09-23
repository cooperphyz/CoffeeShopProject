import React from 'react'
import './LocationCard.css'

const LocationCard = (props) => {
    return (
        <div className="LocationCardItems">
            <h2>{props.location}</h2>
            <h3>{props.address}</h3>
             <iframe className="maplocation"title={props.title} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4774.593394577371!2d-121.12617989495327!3d44.63811689612505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54beea3282a0d35d%3A0x17e0de520e40114b!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1632365273091!5m2!1sen!2sus"allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default LocationCard
