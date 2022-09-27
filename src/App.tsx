import React, { useState } from 'react';
import './App.css';
import './index.css';
import Menu from './components/menu/Menu';
import GameController from './components/game-controller/GameController';



function App() {
  const [state, setState] = useState({ gameState: 'chooseLevel', level: 'easy' });

  const handleSetLevel = (level: string) => {
    setState({ ...state, level: level });
  }

  const handleStartGame = () => {
    setState({ ...state, gameState: 'gameInProcess' });
  }

  const handleStopGame = () => {
    setState({ ...state, gameState: 'chooseLevel' });
  }

  return (
    <div>
      <div className="App" >
        {state.gameState === 'chooseLevel'
          ? (<Menu setLevel={handleSetLevel} startGame={handleStartGame} level={state.level} />)
          : (<GameController stopGame={handleStopGame} level={state.level} />)
        }
      </div>
    </div>
  );
}

export default App;
