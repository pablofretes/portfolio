import React from 'react';
import { Link } from 'react-router-dom';
import pokeballImg from '../img/pokeball.png';
import memotestImg from '../img/memotest.png';

const Projects = () => {
    const projects = [
        {
            name: 'Pokedex',
            description: 'Aplicación de Pokedex',
            img: pokeballImg,
            demo: 'https://heroku-react-pokedex.herokuapp.com',
            github: 'https://github.com/pablofretes/pokedex-react/',
        },
        {
            name: 'Memotest',
            description: 'Juego de Memotest',
            img: memotestImg,
            demo: '',
            github: 'https://github.com/pablofretes/memotest-react'
        }
    ];
    return (
        <section id='projects' data-cy='projects-section'>
			<div className='container'>
				<h2 className='skills-h2'>Proyectos</h2>

				<div className='projects-grid'>
					{projects.map((project, index) => (
						<div className='project-container' key={index}>
							<img src={project.img} alt='' className='project-image' />
							<h3 className='project-title text-titulo'>{project.name}</h3>
							<p className='project-tagline'>{project.tagline}</p>
							<div className='project-links'>
								<Link to={{ pathname: project.live }} target='_blank'>
									<button className='demo-button'>Demo</button>
								</Link>
								<Link to={{ pathname: project.github }} target='_blank'>
									<button className='code-button'>Código</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
    );
};

export default Projects;