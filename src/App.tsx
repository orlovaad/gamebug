import React from 'react';
import background from "./img/Background.png";
import './App.css';
import Menu from './components/menu/Menu';

function App() {
  const handleSetLevel = (level: string) => {
    console.log(level);
  }
  return (
    <div style={{ backgroundImage: `url(${background})`,  height: '100vh', backgroundRepeat: 'no-repeat'}} >
      <div className="App" >
        <Menu setLevel={handleSetLevel}/>
      </div>
    </div>
  );
}

export default App;
