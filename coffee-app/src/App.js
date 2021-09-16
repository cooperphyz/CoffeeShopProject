import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ParallaxPage from './components/Parallax/ParallaxPage';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParallaxPage />
      <Footer />
    </div>
  );
}

export default App;
