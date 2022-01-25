import React from 'react';
import pokeballImg from '../img/pokeball.png';
import memotestImg from '../img/memotest.png';
import sunsetImg from '../img/sunset.png';

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
        },
		{
            name: 'Atardecer',
            description: 'Si el atardecer viene del oeste, ¿qué edificios pueden verlo?',
            img: sunsetImg,
            demo: '',
            github: 'https://github.com/pablofretes/memotest-react'
        },
		{
            name: 'Sudoku',
            description: 'Un solucionador de sudokus',
            img: '',
            demo: '',
            github: ''
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
							<p className='project-tagline'>{project.description}</p>
							<div className='project-links'>
								<a href={project.live} target='_blank' rel='noreferrer'>
									<button className='demo-button'>Demo</button>
								</a>
								<a href={project.github} target='_blank' rel='noreferrer'>
									<button className='code-button'>Código</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
    );
};

export default Projects;