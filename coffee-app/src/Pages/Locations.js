import '../App.css';
import './Locations.css'
import bgvideo from '../components/video/Keraff.mp4'
import Banner from '../components/MenuCo/Banner'
import LocationCard from '../components/Locations/LocationCard';
import { LocationsList } from '../components/Locations/LocationsList';

function Locations() {
  return (
    <div className="LocationItems">
      <span class="spacer">Spacer</span>
      <Banner heading="Locations"/>
    <div className="maincontent">
      {LocationsList.map((item, index) => {
        return (
          <LocationCard location={item.location} address={item.address} src={item.src}/>)
          })}
    </div>
      <video class="bgvideo" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4"/>
      </video>
    </div>
  );
}

export default Locations;
