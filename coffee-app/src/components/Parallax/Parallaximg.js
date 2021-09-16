import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";

import {style} from "./ParallaxPage.css"

const Parallaximg = (props) => {
    return (
        <div className="video-container">
        <ParallaxBanner 
        layers = {[
            {
                image: props.videosrc, 
                amount: 0.6,
                children: <video autoPlay loop muted>
                    <source src={props.videosrc} type="video/mp4"/>
                </video>,
                style: {style}
            }
            ]}
            style={{height: props.height}}>
        </ParallaxBanner>
        </div>
    )
}

export default Parallaximg
