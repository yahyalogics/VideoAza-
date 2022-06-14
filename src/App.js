import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Services from './components/Services';
import Contactus from './components/Contactus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
      <Router>
        
          <Routes>
              <Route exact path="/" element={<Content />}></Route>
              <Route path="/Aboutus" element={<Aboutus />}></Route>
              <Route path="/Services" element={<Services />}></Route>
          
              <Route path="/Contactus" element={<Contactus />}></Route>
              
              
          </Routes>
      </Router>
  );
}

export default App;
