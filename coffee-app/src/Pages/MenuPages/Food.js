import '../../App.css';
import '../../components/MenuCo/MenuSelector.css'
import MenuOrganizer from '../../components/MenuCo/MenuOrganizer';
import Banner from '../../components/MenuCo/Banner'
import MenuSelector from '../../components/MenuCo/MenuSelector'
import bgvideo from "../../components/video/SlowBeans.m4v"
import { brewedcoffees } from "./menulists/brewedcoffees";
import { lattes } from "./menulists/lattes";

function HotCoffee() {
  return (
    <div className="App">
        <div className="menuselector">
        <span className="spacer">Spacer</span>
        <MenuSelector/>
        <span className="spacer">Spacer</span>
        </div>
        
        <div className="menuportion">
        <Banner heading="Brewed"/>
        <MenuOrganizer menutext={brewedcoffees}/>
        <Banner heading="Lattes"/>
        <MenuOrganizer menutext={lattes}/>
        <Banner heading="Macchiatos"/>
        <MenuOrganizer menutext={brewedcoffees}/>
        <Banner heading="Mochas"/>
        <MenuOrganizer menutext={brewedcoffees}/>
        </div>
        <video autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"/>
        </video>
    </div>
  );
}

export default HotCoffee;
