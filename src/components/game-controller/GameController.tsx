import './GameController.css';
import Card from '../card/Card';
import { CardInfo } from '../../interfaces/CardInfo';
import { useState } from 'react';
import { createReadStream } from 'fs';

interface GameControllerState {
    cards: CardInfo[],
    gameState: string,
}

function generateCards(quantity: number): CardInfo[] {
    const cards: CardInfo[] = [];
    const bugCardIndex = Math.floor(Math.random() * quantity);

    for (let i = 0; i < quantity; i++) {
        cards.push({ isActive: false, isBug: bugCardIndex === i });
    }

    return cards;
}

function GameController() {

    const [state, setState] = useState<GameControllerState>({ cards: generateCards(3), gameState: 'inProcess' });

    const handleClickCard = (cardInfo: CardInfo) => {

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
        <div className='cards'>
            {state.cards.map((card, index) => <Card key={index} cardInfo={card} clickCard={handleClickCard} />)}
            
        </div>
    )
}

export default GameController;