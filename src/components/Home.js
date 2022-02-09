import React from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Information from './Information';
import Contact from './Contact';
import { FiDownload } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pdf from '../pdf/PabloFretes-CV.pdf';
import pdfEnglish from '../pdf/PabloFretes-CV-English.pdf';

const Home = ({ language }) => {
    return (
        <div>
            <section id="home" data-cy="home-section">
                {language === 'Spanish' ? (
                    <>
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
                            complicado que era, y todo se volvía cada vez mas difícil. Al final mamá se aburrió de su pequeño negocio, pero yo no me pude despegar
                            mas de la programación. Y ahora me gustaria llevar lo que aprendí al mundo profesional. Contactame! ;).
                        </p>
                        <div className='home-links'>
                            <a href={pdf} target='_blank' className='demo-button' rel='noreferrer' download>
                                Descargar CV <FiDownload className='social-icon' />
                            </a>
                            <AnchorLink href='#contact' className='code-button'>Contactame</AnchorLink>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className='text-h1' data-cy="home-h1">
                        Hi, I'm Pablo ;)
                        </h1>
                        <h2 className='text-titulo'>
                            I'm a Designer / Frontend Web Developer. 
                        </h2>
                        <p className='about-me'>
                            I first found out about programming when the pandemic was starting.
                            At the time my mom was starting a small cosmetic business at home and I thought "Hey i could make a website, 
                            it shouldn't be too hard". I was wrong, it was sooooo hard, every time i checked something out i realized 
                            all over again how hard it was, and it got progressively harder. In the end my mom got bored of her little project,
                            but i couldn't forget about programming anymore. Now i would like to take what i learned to the professional world 
                            and hopefully keep learning. Contact Me!
                        </p>
                        <div className='home-links'>
                            <a href={pdfEnglish} target='_blank' className='demo-button' rel='noreferrer' download>
                                Download CV <FiDownload className='social-icon' />
                            </a>
                            <AnchorLink href='#contact' className='code-button'>Contact Me</AnchorLink>
                        </div>
                    </>
                )}
                <hr className='line'></hr>
            </section>
            <Skills language={language}/>
            <Projects language={language}/>
            <hr className='line'></hr>
            <Contact language={language}/>
            <hr className='line'></hr>
            <Information language={language}/>
        </div>
    );
};

export default Home;