import React from 'react';
import SkillsEnglish from './SkillsEnglish';
import ProjectsEnglish from './ProjectsEnglish';
import InformationEnglish from './InformationEnglish';
import ContactEnglish from './ContactEnglish';
import { FiDownload } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HomeEnglish = () => {
    return (
        <div>
            <section id="home" data-cy="home-section">
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
						<a href='../PabloFretes-CV.pdf' download='PabloFretes-CV.pdf' target='_blank' className='demo-button'>
							Download CV <FiDownload className='social-icon' />
						</a>
						<AnchorLink href='#contact' className='code-button'>Contact Me</AnchorLink>
					</div>
                <hr className='line'></hr>
            </section>
            <SkillsEnglish />
            <ProjectsEnglish />
            <hr className='line'></hr>
            <ContactEnglish />
            <hr className='line'></hr>
            <InformationEnglish />
        </div>
    );
};

export default HomeEnglish;