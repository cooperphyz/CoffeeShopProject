import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Story from './Pages/Story';
import Contact from './Pages/Contact';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path ="/" exact component={Home} />
      <Route path ="/menu" exact component={Menu} />
      <Route path ="/about" exact component={About} />
      <Route path ="/story" exact component={Story} />
      <Route path ="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
