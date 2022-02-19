import React from 'react';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Information from '../information/Information';
import Contact from '../contact/Contact';
import { FiDownload } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pdf from '../../pdf/Pablo-Fretes-CV.pdf';
import pdfEnglish from '../../pdf/Pablo-Fretes-CV-English.pdf';
import './home.css';

const Home = ({ language }) => {
  return (
  <div className='home-project-container'>
    <section id="home" data-cy="home-section">
      {language === 'Spanish' ? (
      <>
        <h1 className='text-h1' data-cy="home-h1">
        Hola, Soy Pablo ;)
        </h1>
        <h2 className='text-titulo'>
        Soy Web Developer. 
        </h2>
        <p className='about-me'>
        Me entere de lo que era programación muy por arriba cuando empezó la pandemia.
        Mi mamá se había puesto un pequeño negocio de cosmética desde casa y pensé "¿no estaría bueno hacerle un sitio web?". 
				Y desde ese momento no me puedo despegar del diseño web y la programación. Contactame! ;).
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
        I'm a Web Developer. 
        </h2>
        <p className='about-me'>
        I first found out about programming when the pandemic was starting.
        At the time my mom was starting a small cosmetic business at home and I thought "Hey I could make a website".
				And from that moment on i couldn't pull away from web design and programming ever again. Contact Me!
        </p>
        <div className='home-links'>
        <a href={pdfEnglish} target='_blank' className='demo-button' rel='noreferrer' download>
          Download CV <FiDownload className='social-icon' />
        </a>
        <AnchorLink href='#contact' className='code-button'>Contact Me</AnchorLink>
        </div>
      </>
      )}
    </section>
    <Projects language={language}/>
    <Skills language={language}/>
    <Contact language={language}/>
		<Information language={language}/>
  </div>
  );
};

export default Home;