import React from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Information from './Information';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <section id="home" data-cy="home-section">
                <h1 className='text-h1' data-cy="home-h1">
                    Hola, Soy Pablo ;)
                </h1>
                <h2 className='text-titulo'>
                    Soy Diseñador / FullStack Web Developer. 
                </h2>
                <hr className='line'></hr>
            </section>
            <Skills />
            <hr className='line'></hr>
            <Projects />
            <hr className='line'></hr>
            <Contact />
            <hr className='line'></hr>
            <Information />
        </div>
    );
};

export default Home;