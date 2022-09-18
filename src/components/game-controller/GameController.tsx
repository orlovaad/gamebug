import './GameController.css';
import Card from '../card/Card';
import { CardInfo } from '../../interfaces/CardInfo';
import { useState } from 'react';
import { createReadStream } from 'fs';

function generateCards(quantity: number): CardInfo[] {
    const cards: CardInfo[] = [];
    const bugCardIndex = Math.floor(Math.random() * quantity);

    for (let i = 0; i < quantity; i++) {
        cards.push({ isActive: false, isBug: bugCardIndex === i });
    }

    return cards;
}

function GameController() {

    const [state, setState] = useState({ cards: generateCards(3), gameState: 'inProcess' });

    const handleClickCard = (cardInfo: CardInfo) => {

        const newCards = [];
        let gameResult = 'lose';

        for (let i = 0; i < state.cards.length; i++) {

            if (state.cards[i] === cardInfo) {
                newCards.push({ isActive: true, isBug: state.cards[i].isBug });

                if (state.cards[i].isBug) {
                    gameResult = 'win';
                }

            } else {
                newCards.push(state.cards[i]);
            }
        }

        setState({
            cards: newCards,
            gameState: gameResult
        });
        
    }



    return (
        <div className='cards'>
            {state.cards.map((card, index) => <Card key={index} cardInfo={card} clickCard={handleClickCard} />)}
        </div>
    )
}


export default GameController;
