import './Menu.css'
import { useState } from 'react'

interface MenuProps {
    setLevel: (level: string) => void;
}

function Menu(props: MenuProps) {
    const [state, setState] = useState({ value: '' });
    const setLevel = props.setLevel;
    const setEasy = () => {
        setState({ value: 'easy' });
    }
    const setMedium = () => {
        setState({ value: 'medium' });
    }
    const setHard = () => {
        setState({ value: 'hard' });
    }

    const handleButton = () => {
        setLevel(state.value);
        setState({ value: '' });
    }

    return (
        <div className='menu'>
            <div>
                <header className='header'>Выберите уровень сложности:</header>
                <p className='headerSecond'>Выберите сложность и игра начнется. Чем выше уровень - тем больше будет выборка карт. </p>
            </div>
            <div className='buttonsLevel'>
                <ul>
                <li><button className={`buttonLevel ${state.value === 'easy' ? 'active' : ''}`} onClick={setEasy}>Простой</button></li>
                <li><button className={`buttonLevel ${state.value === 'medium' ? 'active' : ''}`} onClick={setMedium}>Средний</button></li>
                <li><button className={`buttonLevel ${state.value === 'hard' ? 'active' : ''}`} onClick={setHard}>Сложный</button></li>
                </ul>
            </div>
            <button className='startButton' onClick={handleButton}>Начать игру</button>
        </div>
    );
}

export default Menu;
