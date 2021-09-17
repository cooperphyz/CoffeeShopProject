import '../../App.css';
import '../../components/MenuCo/MenuSelector.css'
import MenuOrganizer from '../../components/MenuCo/MenuOrganizer';
import Banner from '../../components/MenuCo/Banner'
import MenuSelector from '../../components/MenuCo/MenuSelector'
import bgvideo from "../../components/video/Lemonade.mp4"
import { Specialties } from './menulists/specialties'

function HotCoffee() {
  return (
    <div className="App">
        <div className="menuselector">
        <span className="spacer">Spacer</span>
        <MenuSelector/>
        <span className="spacer">Spacer</span>
        </div>
        
        <div className="menuportion">
        <Banner heading="Refreshers"/>
        <MenuOrganizer menutext={Specialties}/>
        <Banner heading="Iced Mixes"/>
        <MenuOrganizer menutext={Specialties}/>
        <Banner heading="Macchiatos"/>
        <MenuOrganizer menutext={Specialties}/>
        <Banner heading="Mochas"/>
        <MenuOrganizer menutext={Specialties}/>
        </div>
        <video autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"/>
        </video>
    </div>
  );
}
export default HotCoffee;
