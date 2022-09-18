import React from 'react';
import './App.css';
import './index.css';
import Menu from './components/menu/Menu';
import GameController from './components/game-controller/GameController';



function App() {
  const handleSetLevel = (level: string) => {
    console.log(level);
  }
  return (
    <div>
      <div className="App" >
        {/* <Menu setLevel={handleSetLevel}/> */}
        <GameController />
      </div>
    </div>
  );
}

export default App;
