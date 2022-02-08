import React from 'react';
import pokeballImg from '../img/pokeball.png';
import memotestImg from '../img/memotest.png';
import sunsetImg from '../img/sunset.png';
import sudokuImg from '../img/sudoku.png';

const Projects = () => {
    const projects = [
        {
            info: `Este fue el primer proyecto que hice solo, sin seguir ninguna guía ni nada.
            Tarde un montón de tiempo, aproximadamente 6 semanas, en terminarlo. Lo que más me
            costó fue redux. Me averguenza un poco admitir que no pude averiguar como hacer
            20 llamadas a la API de pokeapi.co y guardarlas en un estado de redux inmutablemente. 
            Así que por desgracia eso tuve que hacerlo con un react useState.`,
            name: 'Pokedex',
            description: 'Aplicación de Pokedex',
            img: pokeballImg,
            demo: 'https://heroku-react-pokedex.herokuapp.com',
            github: 'https://github.com/pablofretes/pokedex-react/',
        },
        {
            info: `Al principio cuando me planteé este proyecto pensaba solo hacer un juego y listo. 
            Pero al final me prendí y me puse a practicar GraphQL. Tuve un montón de problemas, llamando
            incorrectamente las queries o no proveerle los paramentros correctamente, pero por suerte pude
            solucionarlos todos. También fue un desafío hacer el deployment porque no entendía
            como hacerlo sin poder usar una build que guardar en el backend para subir a heroku. Al final 
            terminé subiendo el backend a heroku y el frontend a netlify.`,
            name: 'Memotest',
            description: 'Juego de Memotest',
            img: memotestImg,
            demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
            github: 'https://github.com/pablofretes/memotest-react'
        },
		{
            info: `El mayor desafío de este proyecto fue el CSS. Parece bastante simple, pero no entendía como usar CSS Grid. 
            Mi Google-Do subió a cinturón marrón para cuando había terminado con esto.`,
            name: 'Atardecer',
            description: 'Si el atardecer viene del oeste, ¿qué edificios pueden verlo?',
            img: sunsetImg,
            demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
            github: 'https://github.com/pablofretes/sunset-hills',
        },
		{
            info: `Tuve la idea de hacer este proyecto cuando estaba haciendo un ejercicio de validación de sudoku 
            en CodeWars. Pensé "esto básicamente es media app de un solucionador de sudoku" mientras estaba por terminarlo, 
            entonces lo hice. Otra vez el estilizado fue complicado. Parece simple de nuevo pero tarde días en entender como hacer
            la mesa de sudoku en CSS, y todavía no me sale hacerlo responsivo.`,
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
                            <p className='project-info'>{project.info}</p>
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