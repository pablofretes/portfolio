import React, { useState } from 'react';
import ButtonSlider from './ButtonSlider';

const Slider = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if(slideIndex !== data.length - 1){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.length - 1){
            setSlideIndex(0)
        }
    };

    const previousSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1);
        } else if(slideIndex === 0){
            setSlideIndex(data.length - 1);
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className='slider-container'>
            <div key={data[slideIndex].id} className={slideIndex === data[slideIndex].id - 1 ? 'project-container active-slide' : ''}>
                <img src={data[slideIndex].img} alt='' className='project-image' />
                <h3 className='project-title text-titulo'>{data[slideIndex].name}</h3>
                <p className='project-info'>{data[slideIndex].info}</p>
                <p className='project-description'>{data[slideIndex].description}</p>
                <div className='project-links'>
                    <a href={data[slideIndex].demo} target='_blank' rel='noreferrer'>
                        <button className='demo-button'>Demo</button>
                    </a>
                    <a href={data[slideIndex].github} target='_blank' rel='noreferrer'>
                        <button className='code-button'>Código</button>
                    </a>
                </div>
            </div>
            <ButtonSlider slide={previousSlide} direction='previous'/>
            <ButtonSlider slide={nextSlide} direction='next'/>
            <div className="container-dots">
                {Array.from({length: data.length }).map((item, index) => (
                    <div
                    key={index}
                    onClick={() => moveDot(index)}
                    className={slideIndex === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;