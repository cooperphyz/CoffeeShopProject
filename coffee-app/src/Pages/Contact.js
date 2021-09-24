import '../App.css';
import './Contact.css'
import Banner from '../components/MenuCo/Banner'
import bgvideo from '../components/video/Keraff.mp4'

function Contact() {
  return (
    <div className="Contact">
      <div className="contactcontent">
        
      </div>
      <video class="bgvideo" autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"/>
        </video>
    </div>
  );
}

export default Contact;
