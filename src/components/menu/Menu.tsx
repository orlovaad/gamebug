import './Menu.css';
import { LevelsEnum } from '../enums/enums';

interface MenuProps {
    setLevel: (level: LevelsEnum) => void;
    startGame: () => void;
    level: LevelsEnum;
}

const LEVELS = {
    [LevelsEnum.easy]: 'Лёгкий',
    [LevelsEnum.medium]: 'Средний',
    [LevelsEnum.hard]: 'Сложный',
}

function Menu({ setLevel, startGame, level }: MenuProps) {

    const buttons = (Object.entries(LEVELS)).map(([key, value]) => {
        const numberKey = Number(key);

        return (
            <button
                key={key}
                className={`buttonLevel ${level === numberKey ? 'active' : ''}`}
                onClick={() => setLevel(numberKey)}
            >
                {value}
            </button>
        )
    });

    return (
        <div className='menu'>
            <div>
                <h1 className='header'>Выберите уровень сложности:</h1>
                <h2 className='headerSecond'>Выберите сложность и игра начнется. Чем выше уровень - тем больше будет выборка карт. </h2>
            </div>
            <div className='buttonsLevel'>
                {buttons}
            </div>
            <button className='startButton' onClick={startGame}>Начать игру</button>
        </div>
    );
}

export default Menu;
