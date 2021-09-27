import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="slide" id="slide1">
        <div className="title">
          <h1 className="heading">Cynthia's Portfolio</h1>
          <p className="heading">Introducing my work, come and explore</p>
        </div>
      </div>

      <div className="slide" id="slide2">
        <div className="title">
          <h1>About me</h1>
          <About/>
        </div>
      </div>

      <div className="slide" id="slide3">
          <div className="title">
            <h1>My Skills</h1>
            <Skills/>
          </div>
      </div>

      <div className="slide" id="slide4">
          <div className="title">
            <h1>My Projects</h1>
            <Projects/>
          </div>
          
      </div>
      
      <div className="slide" id="slide5">
          <div className="title">
            <Contact/>
          </div>
      </div>

    </div>
  );
}

export default App;
