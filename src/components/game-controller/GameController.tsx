import './GameController.css';
import Card from '../card/Card';
import { GameStateEnum, LevelsEnum } from '../../types/enums/enums';

interface GameControllerProps {
  stopGame: () => void;
  finishGame: () => void;
  gameState: GameStateEnum;
  level: LevelsEnum;
}

const LEVELS: Record<LevelsEnum, number> = {
  [LevelsEnum.easy]: 3,
  [LevelsEnum.medium]: 6,
  [LevelsEnum.hard]: 10,
};

function generateBugIndex(quantity: number): number {
  return Math.floor(Math.random() * quantity);
}

function GameController({ stopGame, finishGame, level, gameState }: GameControllerProps) {
  const bugIndex = generateBugIndex(LEVELS[level]);

  const handleClickCard = () => {
    if (gameState === GameStateEnum.gameFinished) {
      stopGame();
    } else {
      finishGame();
    }
  };

  const printCards = () => {
    const cards = Array(LEVELS[level]);

    for (let i = 0; i < LEVELS[level]; i++) {
      cards[i] = <Card key={i} isBug={i === bugIndex} onClick={handleClickCard} />;
    }

    return cards;
  };

  return <div className={`cards -${level}`}>{printCards()}</div>;
}

export default GameController;
