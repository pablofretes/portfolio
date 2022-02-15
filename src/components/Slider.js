import React, { useState } from 'react';
import ButtonSlider from './ButtonSlider';

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
		setSlideIndex(slideIndex !== data.length - 1 ? slideIndex + 1 : 0);
  }

  const previousSlide = () => {
		setSlideIndex(slideIndex !== 0 ? slideIndex - 1 : data.length - 1);
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
  	<div className='slider-root'>
      <div className='slider-container'>
        <div key={data[slideIndex].id} className={slideIndex === data[slideIndex].id - 1 ? 'project-container active-slide' : ''}>
          <div className='img-container'>
            <img src={data[slideIndex].img} alt='' className='project-image' />
          </div>
          <div className='text-container'>
            <h3 className='project-title text-titulo'>{data[slideIndex].name} </h3>
            <p className='project-description'>{data[slideIndex].description}</p>
          </div>
          <div className='project-links'>
          <a href={data[slideIndex].demo} target='_blank' rel='noreferrer'>
            <button className='demo-button'>Demo</button>
          </a>
          <a href={data[slideIndex].github} target='_blank' rel='noreferrer'>
          <button className='code-button'>Github</button>
          </a>
        	</div>
      	</div>
    	</div>
    	<div className={slideIndex === data[slideIndex].id - 1 ? 'project-info-container active-slide' : ''}>
      	<p className='project-info'>{data[slideIndex].info}</p>
      </div>
      <ButtonSlider slide={previousSlide} direction='previous'/>
      <ButtonSlider slide={nextSlide} direction='next'/>
      <div className="container-dots">
      {Array.from({length: data.length }).map((item, index) => (
        <div key={index} onClick={() => moveDot(index)} className={slideIndex === index ? "dot active" : "dot"}></div>
      ))}
    	</div>
  	</div>
  );
};

export default Slider;