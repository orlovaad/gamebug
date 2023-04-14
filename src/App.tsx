import React, { useState } from 'react';
import './App.css';
import './index.css';
import Menu from './components/menu/Menu';
import { GameStateEnum, LevelsEnum } from './types/enums/enums';
import GameController from './components/game-controller/GameController';

function App() {
  const [state, setState] = useState({ gameState: GameStateEnum.chooseLevel, level: LevelsEnum.easy });

  const handleSetLevel = (level: LevelsEnum) => {
    setState({ ...state, level: level });
  };

  const handleStartGame = () => {
    setState({ ...state, gameState: GameStateEnum.gameInProcess });
  };

  const handleStopGame = () => {
    setState({ ...state, gameState: GameStateEnum.chooseLevel });
  };

  const handleFinishGame = () => {
    setState({ ...state, gameState: GameStateEnum.gameFinished });
  };

  return (
    <div>
      <div className="App">
        {state.gameState === GameStateEnum.chooseLevel ? (
          <Menu setLevel={handleSetLevel} startGame={handleStartGame} level={state.level} />
        ) : (
          <GameController
            stopGame={handleStopGame}
            finishGame={handleFinishGame}
            level={state.level}
            gameState={state.gameState}
          />
        )}
      </div>
    </div>
  );
}

export default App;
