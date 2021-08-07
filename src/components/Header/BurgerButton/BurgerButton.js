import React from 'react';
import './BurgerButton.css';

function BurgerButton({onClick, isBurgerOpen}) {
    
    return (
        <button className={`burger-button ${isBurgerOpen?'burger-button_active':''}`} onClick={onClick}>
            <div className='burger-button__line'/>
            <div className='burger-button__line'/>
            <div className='burger-button__line'/>
        </button>
    )
}

export default BurgerButton;
