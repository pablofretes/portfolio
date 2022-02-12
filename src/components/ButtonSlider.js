import React from 'react';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';

const ButtonSlider = ({ slide, direction }) => {
    return (
        <button onClick={slide} className={direction === 'next' ? 'button-slide next' : 'button-slide prev'}>
            <img src={direction === 'next' ? rightArrow : leftArrow} alt='arrow'/>
        </button>
    );
};

export default ButtonSlider;