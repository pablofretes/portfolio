import React from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { Link } from 'react-router-dom';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Home = () => {
    
    return (
        <div>
            <section id="home">
                <h1 className='text-h1'>
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
            <section id='contact'>
                <h2>Contactame</h2>
                <div className='contact-info'>
					<div className='info-container'>
						<FiPhoneCall className='info-icon' />
						<h3 className='info-name'>Teléfono</h3>
						<p className='info'>261-335-2786</p>
					</div>
					<div className='info-container'>
						<FiMail className='info-icon' />
						<h3 className='info-name'>E-mail</h3>
						<p className='info'>pablofretes.balzarelli@gmail.com</p>
					</div>
				</div>
            </section>
            <div className='container'>
                <h2 className='text-titulo'>Mas cosas que saber sobre mi</h2>
                <ul>
                    <li className='listed-items'>
                        Ingles bilingüe.
                    </li>
                    <li className='listed-items'>
                        <Link 
                            to={{ pathname: 'https://github.com/pablofretes/fullstackopen/' } }
                            target='_blank'
                            style={{ textDecoration: 'none' } }
                        >
                        Curso completo de FullStack Open 2021 
                        </Link>
                    </li>
                    <li className='listed-items'>
                        <Link 
                            to={{ pathname: 'https://www.codewars.com/users/pablofretes/completed_solutions' } }
                            target='_blank'
                            style={{ textDecoration: 'none' } }
                        >
                        Perfil de Codewars 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;