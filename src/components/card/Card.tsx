import { useState } from 'react';
import './Card.css'

interface CardProps {
    isBug: boolean;
    onClick: () => void;
}

function Card({ isBug, onClick }: CardProps) {

    const [state, setState] = useState({ isActive: false });

    const handleClick = () => {
        setState({ isActive: true });
        onClick();
    }

    return (
        <div className={`flip-container ${state.isActive ? 'active' : ''}`} onClick={handleClick}>
            <div className="flipper" >
                <div className="front">
                </div>
                <div className={`back ${isBug ? 'bug' : ''}`}>
                </div>
            </div>
        </div>
    )

}

export default Card;