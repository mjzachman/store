import React from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/shop" element = {<Shop />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
