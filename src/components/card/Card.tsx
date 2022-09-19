import { CardInfo } from '../../interfaces/CardInfo';
import './Card.css'

interface CardProps {
    cardInfo: CardInfo;
    clickCard: (cardInfo: CardInfo) => void;
}

function Card(props: CardProps) {
    const cardInfo = props.cardInfo;
    const isBug = cardInfo.isBug;
    const isActive = cardInfo.isActive;
    const clickCard = props.clickCard;

    const handleClick = () => {
        clickCard(cardInfo);
    }


    return (
        <div className={`flip-container ${isActive ? '-active' : ''}`} onClick={handleClick}>
            <div className="flipper" >
                <div className="front">
                </div>
                <div className={`back ${isBug ? '-bug' : ''}`}>
                </div>
            </div>
        </div>
    )

}

export default Card;