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
                    Soy Diseñador / Frontend Web Developer. 
                </h2>
                <p className='about-me'>
                    Me entere de lo que era programación muy por arriba cuando empezó la pandemia.
                    Mi mamá se había puesto un pequeño negocio de cosmética desde casa y pensé "¿no estaría bueno hacerle un sitio web?,
                    no puede ser muy dificil". Me equivoqué, era muy dificil, cada vez que me fijaba algo me daba mas cuenta de lo
                    complicado que era, yo todo se volvía cada vez mas difícil. Al final mi mamá se aburrió de su pequeño negocio, pero yo no me pude despegar
                    mas de la programación. Y ahora me gustaria llevar lo que aprendí al mundo profesional. Contactame! ;).
                </p>
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