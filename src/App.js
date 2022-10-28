import React from 'react';
import './App.css';
import Home from './Components/Home.js'
import Work from './Components/Work.js'
import About from './Components/About.js'
import Project from './Components/Project.js'
import Skills from './Components/Skills.js'
import Contact from './Components/Contact.js'
import './Components/Home.css'
import {useState, useEffect} from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(!loading);
    const timeOut = setTimeout(()=>{setLoading(loading)},4000);
    return (()=>{clearTimeout(timeOut)});
  },[])
  return (
    <div>
      {
        loading ?
        <div className='loader'>
          <PacmanLoader
            color="#F4BF3A"
            size={40}
          />
        </div> :
        <div className="App">
          <Home/>
          <About/>
          <Project/>
          <Work/>
          <Skills/>
          <Contact/>
        </div>
      }
    </div>
  );
}

export default App;
