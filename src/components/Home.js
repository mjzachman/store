import React from 'react';
import '../styles/Home.css';
import sec from '../images/SEC.png';
import stadium from '../images/stadium.jpg';


function Home() {
  return (
    <div className="home">
      <img src = {stadium} alt = "stadium" id = 'stadium'/>
      <img src={sec} alt = "SEC Logo" id='sec'/>
    </div>
  );
}

export default Home;