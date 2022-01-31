import React from 'react';
import pokeballImg from '../img/pokeball.png';
import memotestImg from '../img/memotest.png';
import sunsetImg from '../img/sunset.png';
import sudokuImg from '../img/sudoku.png';

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
            demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
            github: 'https://github.com/pablofretes/memotest-react'
        },
		{
            name: 'Atardecer',
            description: 'Si el atardecer viene del oeste, ¿qué edificios pueden verlo?',
            img: sunsetImg,
            demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
            github: 'https://github.com/pablofretes/sunset-hills',
        },
		{
            name: 'Sudoku Solver',
            description: 'Un solucionador de sudokus',
            img: sudokuImg,
            demo: 'https://heuristic-leakey-318be8.netlify.app/',
            github: 'https://github.com/pablofretes/sudoku-solver-ts'
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
							<p className='project-description'>{project.description}</p>
							<div className='project-links'>
								<a href={project.demo} target='_blank' rel='noreferrer'>
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