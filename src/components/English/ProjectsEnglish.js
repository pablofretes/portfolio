import React from 'react';
import pokeballImg from '../../img/pokeball.png';
import memotestImg from '../../img/memotest.png';
import sunsetImg from '../../img/sunset.png';
import sudokuImg from '../../img/sudoku.png';

const ProjectsEnglish = () => {
    const projects = [
        {
            info: `This was the first project I made completely by myself, without following any guides.
            It took me a long time, aproximately 6 weeks, to finish it. The hardest part was redux. I'm a
            bit ashamed to admit that I couldn't figure out how to make 20 API calls to pokeapi.co and 
            store them immutably in redux store. So I disgracefully made a workaround with React useState.`,
            name: 'Pokedex',
            description: 'Pokedex App. You can review pokemons if you create an account.',
            img: pokeballImg,
            demo: 'https://heroku-react-pokedex.herokuapp.com',
            github: 'https://github.com/pablofretes/pokedex-react/',
        },
        {
            info: `When I first started thinking about this project I was just planning on a simple game. But 
            afterwards I suddenly thought it would be fun to practice GraphQL with it. I had a lot of problems,
            calling queries incorrectly or not providing correct parameters, luckily I fixed them all. Another 
            challenge was to deploy it online. I just couldn't figure out how to host it on heroku without using 
            a build folder. I was finally able to do it when i uploaded the backend to heroku and the frontend to netlify.`,
            name: 'Memotest',
            description: 'Memotest Game. Stores the Top 10 HighScores',
            img: memotestImg,
            demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
            github: 'https://github.com/pablofretes/memotest-react'
        },
		{
            info: `The biggest challenge on this project was CSS. It seems pretty simple, but I didn't understand how 
            to use CSS Grid. My Google-Fu went all the way up to brown belt by the time I was done.`,
            name: 'Sunset Hills',
            description: 'If the sunset comes from the west, which buildings can see it?',
            img: sunsetImg,
            demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
            github: 'https://github.com/pablofretes/sunset-hills',
        },
		{
            info: `The idea for this project came about when I was doing an exercise on sudoku validation on CodeWars. 
            When I was about to finish it I thought "Hey, this is basically half a sudoku solver app", so I made it. Once again 
            the styling proved harder than i had previously thought. It looks simple but it took me days to understand how to 
            make the sudoku board, and I still can't make it responsive.`,
            name: 'Sudoku Solver',
            description: 'Just a sudoku solver that pulls unsolved sudokus from an API',
            img: sudokuImg,
            demo: 'https://heuristic-leakey-318be8.netlify.app/',
            github: 'https://github.com/pablofretes/sudoku-solver-ts'
        }
    ];
    return (
        <section id='projects' data-cy='projects-section'>
			<div className='container'>
				<h2 className='skills-h2'>Proyects</h2>
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
									<button className='code-button'>Code</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
    );
};

export default ProjectsEnglish;