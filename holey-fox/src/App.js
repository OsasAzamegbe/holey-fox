import logo from './logo.svg';
import './App.css';
import Icon from './Icon';

function App() {
  const handleDoubleClick = (e) => {
    console.log(e)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div onDoubleClick={handleDoubleClick}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Icon />
          <p>untitled</p>
          </div>
      </header>
    </div>
  );
}

export default App;
