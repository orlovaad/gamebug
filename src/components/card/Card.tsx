import { useState } from 'react';
import './Card.css';

interface CardProps {
  isBug: boolean;
  onClick: () => void;
}

function Card({ isBug, onClick }: CardProps) {
  const [state, setState] = useState({ isActive: false });

  const handleClick = () => {
    setState({ isActive: true });
    onClick();
  };

  return (
    <div className={`flip-container ${state.isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="flipper">
        <img src="img/flippedCard.png" alt="front" className="front" />
        <img src={isBug ? 'img/bugCard.png' : 'img/finishCard.png'} alt="back" className="back" />
      </div>
    </div>
  );
}

export default Card;
