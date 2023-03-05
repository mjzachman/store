import React from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <h1> MY APP </h1>
      <Nav />
      <Home />
      <About />
      <Shop />
      <Item />
    </div>
  );
}

export default App;
