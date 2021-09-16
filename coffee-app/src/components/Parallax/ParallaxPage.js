import { ParallaxProvider } from "react-scroll-parallax"; 
import Parallaximg from "./Parallaximg";
import Banner from "../PageBanner/Banner"
import { BannerText } from "./BannerText"
import "./ParallaxPage.css"
import video1 from "../video/Creamer.m4v"
import video2 from "../video/RoastingBeans.m4v"
import video3 from "../video/Lemonade.mp4"

const ParallaxPage = () => {
    return (
        <ParallaxProvider className="ParallaxItems">
            <Parallaximg videosrc={video3} height={600}/> 
            <Banner heading={BannerText[0].title} text={BannerText[0].text}/>
            <Parallaximg videosrc={video2} height={600}/>
            <Banner heading={BannerText[1].title} text={BannerText[1].text}/>
            <Parallaximg videosrc={video1} height={600}/>
            <Banner heading={BannerText[2].title} text={BannerText[2].text}/>
        </ParallaxProvider>
    )
}

export default ParallaxPage
