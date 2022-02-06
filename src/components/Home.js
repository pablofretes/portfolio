import React from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Information from './Information';
import Contact from './Contact';
import { FiDownload } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                <div className='home-links'>
						<a href='/PabloFretes-CV.pdf' download='PabloFretes-CV.pdf' target='_blank' className='demo-button'>
							Descargar CV <FiDownload className='social-icon' />
						</a>
						<AnchorLink href='#contact' className='code-button'>Contactame</AnchorLink>
					</div>
                <hr className='line'></hr>
            </section>
            <Skills />
            <Projects />
            <hr className='line'></hr>
            <Contact />
            <hr className='line'></hr>
            <Information />
        </div>
    );
};

export default Home;