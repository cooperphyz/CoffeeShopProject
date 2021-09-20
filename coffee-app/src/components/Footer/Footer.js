import React from 'react'
import Column from './Column'

import './Footer.css'

const Footer = () => {
    return (
        <div className='Wrapper'>
        <div className='FooterItems'>
            <Column className="column"title="Social Media"link1="Facebook"link2="Twitter"link3="Instagram"
            icon1/>
            <span className="spacer">Space</span>
            <Column className="column"title="Contact"link1="vavagrounds@gmail.com"link2="+1-200-3541-2341"link3="123 5th St Madras, Oregon"/>
            <span className="spacer">Space</span>
            <Column className="column"title="Useful Links"link1="About"link2="Menu"link3="Our Story"/>
        </div>
        </div>
    )
}

export default Footer
