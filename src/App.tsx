import React, { useState } from 'react';
import './App.css';
import './index.css';
import Menu from './components/menu/Menu';
import GameController from './components/game-controller/GameController';
import { GameState, LevelsEnum } from './components/enums/enums';

function App() {
  const [state, setState] = useState({ gameState: GameState.chooseLevel, level: LevelsEnum.easy });

  const handleSetLevel = (level: LevelsEnum) => {
    setState({ ...state, level: level });
  }

  const handleStartGame = () => {
    setState({ ...state, gameState: GameState.gameInProcess });
  }

  const handleStopGame = () => {
    setState({ ...state, gameState: GameState.chooseLevel });
  }

  const handleFinishGame = () => {
    setState({ ...state, gameState: GameState.gameFinished });
  }

  return (
    <div>
      <div className="App" >
        {state.gameState === GameState.chooseLevel
          ? (<Menu setLevel={handleSetLevel} startGame={handleStartGame} level={state.level} />)
          : (<GameController stopGame={handleStopGame} finishGame={handleFinishGame} level={state.level} gameState={state.gameState} />)
        }
      </div>
    </div>
  );
}

export default App;
