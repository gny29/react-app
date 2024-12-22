
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './compenents/header';
import Footer from './compenents/Footer';
import './compenents/style.css';
import Home from './compenents/Home';
import Menu from './compenents/Menu';
import About from './compenents/About';
import Contact from "./compenents/Contact";
import Paiemt from './compenents/Paiemt';
function App() {
  return (
  
 <div className="App">
  <Router>
    
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/paiement" element={<Paiemt />} />
        </Routes>
        <Footer/>
      
    </Router>
    </div>
  );
}

export default App;
