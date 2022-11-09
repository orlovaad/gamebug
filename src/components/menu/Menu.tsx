import './Menu.css';
import { LevelsEnum } from '../../types/enums/enums';

interface MenuProps {
  setLevel: (level: LevelsEnum) => void;
  startGame: () => void;
  level: LevelsEnum;
}

const LEVELS = {
  [LevelsEnum.easy]: 'Простой',
  [LevelsEnum.medium]: 'Средний',
  [LevelsEnum.hard]: 'Сложный',
};

function Menu({ setLevel, startGame, level }: MenuProps) {
  const buttons = Object.entries(LEVELS).map(([key, value]) => {
    return (
      <button
        key={key}
        className={`buttonLevel ${level === key ? 'active' : ''}`}
        onClick={() => setLevel(key as LevelsEnum)}
      >
        {value}
      </button>
    );
  });

  return (
    <div className="menu">
      <div>
        <h1 className="header">Выберите уровень сложности:</h1>
        <h2 className="description">
          Выберите сложность и игра начнется. Чем выше уровень - тем больше будет выборка карт.
        </h2>
      </div>
      <div>
        <div className="buttonsLevel"> {buttons} </div>
      </div>
      <div className="startButtonContainer">
        <button className="startButton" onClick={startGame}>
          Начать игру
        </button>
      </div>
      <div className="menuCardsContainer">
        <div className="menuCard"></div>
        <div className="menuCard moreRotated"></div>
      </div>
    </div>
  );
}

export default Menu;
