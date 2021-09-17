import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Story from './Pages/Story';
import Contact from './Pages/Contact';

import HotCoffee from './Pages/MenuPages/HotCoffee'
import HotTea from './Pages/MenuPages/HotTea'

import Seasonal from './Pages/MenuPages/Seasonal'

import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path ="/" exact component={Home} />
      <Route path ="/menu" exact component={HotCoffee} />
      <Route path ="/about" exact component={About} />
      <Route path ="/story" exact component={Story} />
      <Route path ="/contact" exact component={Contact} />
      <Route path ="/menu/hot-coffee" exact component={HotCoffee} />
      <Route path ="/menu/hot-tea" exact component={HotTea} />

      <Route path ="/menu/seasonal" exact component={Seasonal} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
