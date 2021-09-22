import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Locations from './Pages/Locations';
import Contact from './Pages/Contact';

import Blended from './Pages/MenuPages/Blended'
import ColdCoffee from './Pages/MenuPages/ColdCoffee'
import ColdDrinks from './Pages/MenuPages/ColdDrinks'
import Food from './Pages/MenuPages/Food'
import HotCoffee from './Pages/MenuPages/HotCoffee'
import HotDrinks from './Pages/MenuPages/HotDrinks'
import HotTea from './Pages/MenuPages/HotTea'
import IcedTea from './Pages/MenuPages/IcedTea'
import Seasonal from './Pages/MenuPages/Seasonal'

import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path ="/" exact component={Home} />
      <Route path ="/menu" exact component={HotCoffee} />
      <Route path ="/about" exact component={About} />
      <Route path ="/locations" exact component={Locations} />
      <Route path ="/contact" exact component={Contact} />
      <Route path ="/menu/blended" exact component={Blended} />
      <Route path ="/menu/cold-coffee" exact component={ColdCoffee} />
      <Route path ="/menu/cold-drinks" exact component={ColdDrinks} />
      <Route path ="/menu/food" exact component={Food} />
      <Route path ="/menu/hot-coffee" exact component={HotCoffee} />
      <Route path ="/menu/hot-drinks" exact component={HotDrinks} />
      <Route path ="/menu/hot-tea" exact component={HotTea} />
      <Route path ="/menu/iced-tea" exact component={IcedTea} />
      <Route path ="/menu/seasonal" exact component={Seasonal} />
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
