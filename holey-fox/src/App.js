import './App.css';
import Fox from './assets/fox.png';
import Icon from './Icon';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  let navigate = useNavigate();
  const handleMouseEnter = () => {
    setHovered(true);
  }
  const handleMouseLeave = () => { 
    setHovered(false);
  }
  const handleClick = () => { 
    console.log(`this site was heavily inspired
     - and by heavily, i mean entirely - by kendrick lamar's oklama.
     check it out: https://oklama.com`);
    navigate('/foxy');
    
  }
  const [hovered, setHovered] = useState(false);
  return (
    <div className="App">
      <Helmet>
        <title>f0x</title>
        <meta name="title" content="f0x"></meta>
        <meta name="description" content="this be the sandbox."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.holeyfox.co/"/>
        <meta property="og:title" content="f0x"/>
        <meta property="og:description" content="this be the sandbox."/>
        <meta property="og:image" content={Fox}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="https://www.holeyfox.co/"/>
        <meta name="twitter:title" content="f0x"/>
        <meta name="twitter:description" content="this be the sandbox."/>
        <meta name="twitter:image" content={Fox}/>
      </Helmet>
      <header className="App-header">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="hover"
        >
          <Icon hovered={hovered}/>
          <h3 className="app-p">untitled</h3>
          </div>
      </header>
    </div>
  );
}

export default App;
