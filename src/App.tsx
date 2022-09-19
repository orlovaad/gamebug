import React, { useState } from 'react';
import './App.css';
import './index.css';
import Menu from './components/menu/Menu';
import GameController from './components/game-controller/GameController';



function App() {
  const [state, setState] = useState({ gameState: 'chooseLevel', level: '' });

  const handleSetLevel = (level: string) => {
    setState({ gameState: 'gameInProcess', level: level });
  }
  const handleStopGame = () => {
    setState({ gameState: 'chooseLevel', level: '' });
  }

  return (
    <div>
      <div className="App" >
        {state.gameState === 'chooseLevel'
          ? (<Menu setLevel={handleSetLevel} />)
          : (<GameController stopGame={handleStopGame} level={state.level}/>)
        }
      </div>
    </div>
  );
}

export default App;
