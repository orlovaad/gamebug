import './GameController.css';
import Card from '../card/Card';
import { CardInfo } from '../../interfaces/CardInfo';
import { useState } from 'react';

interface GameControllerState {
    cards: CardInfo[],
    gameState: string,
}

interface GameControllerProps {
    stopGame: () => void;
    level: string;
}

function generateCards(quantity: number): CardInfo[] {
    const cards: CardInfo[] = [];
    const bugCardIndex = Math.floor(Math.random() * quantity);

    for (let i = 0; i < quantity; i++) {
        cards.push({ isActive: false, isBug: bugCardIndex === i });
    }

    return cards;
}

const LEVELS: Record<string, number> = {
    easy: 3,
    medium: 6,
    hard: 10,
}

function GameController(props: GameControllerProps) {

    const stopGame = props.stopGame;
    const level = props.level;
    
    const [state, setState] = useState<GameControllerState>({ cards: generateCards(LEVELS[level] ?? 3), gameState: 'inProcess' });

    const handleClickCard = (cardInfo: CardInfo) => {

        if (state.gameState !== 'inProcess') {
            stopGame();
            return;
        }

        const cardState: GameControllerState = { cards: [], gameState: 'lose' }
        const newState = state.cards.reduce((acc, card) => {

            if (card === cardInfo) {
                acc.cards.push({ isActive: true, isBug: card.isBug });

                if (card.isBug) {
                    acc.gameState = 'win';
                }
            } else {
                acc.cards.push(card);
            }

            return acc;
        }, cardState);

        setState(newState);
    }

    return (
        <div className={`cards ${level ==='hard' ? '-hard' : ''}`}>
            {state.cards.map((card, index) => <Card key={index} cardInfo={card} clickCard={handleClickCard} />)}
        </div>
    )
}

export default GameController;