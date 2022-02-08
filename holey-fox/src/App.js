import './App.css';
import Icon from './Icon';
import { useState } from 'react';

function App() {
  const handleMouseEnter = () => {
    setHovered(true);
  }
  const handleMouseLeave = () => { 
    setHovered(false);
  }
  const handleClick = () => { 
    
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
          <p>untitled</p>
          </div>
      </header>
    </div>
  );
}

export default App;
