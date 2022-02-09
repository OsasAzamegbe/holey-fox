import './App.css';
import Icon from './Icon';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
