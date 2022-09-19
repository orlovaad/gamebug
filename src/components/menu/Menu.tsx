import './Menu.css'
import { useState } from 'react'

interface MenuProps {
    setLevel: (level: string) => void;
}

const LEVELS = {
    easy: 'Лёгкий',
    medium: 'Средний',
    hard: 'Сложный',
}

function Menu(props: MenuProps) {
    const [state, setState] = useState({ level: '' });

    const setLevel = props.setLevel;

    const handleSetLevel = (level: string) => {
        setState({ level });
    }

    const handleButton = () => {
        setLevel(state.level);
        setState({ level: '' });
    }

    const buttons = Object.entries(LEVELS).map(([key, value]) => {
        return (
            <button
                key={key}
                className={`buttonLevel ${state.level === key ? 'active' : ''}`}
                onClick={() => handleSetLevel(key)}
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
            <button className='startButton' onClick={handleButton}>Начать игру</button>
        </div>
    );
}

export default Menu;
