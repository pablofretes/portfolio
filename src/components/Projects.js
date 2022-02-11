import React from 'react';
import pokeballImg from '../img/pokeball.png';
import memotestImg from '../img/memotest.png';
import sunsetImg from '../img/sunset.png';
import sudokuImg from '../img/sudoku.png';

const Projects = ({ language }) => {
    const projects = [
        {
            info: `Este fue el primer proyecto que hice solo, sin seguir ninguna guía ni nada.
            Tarde un montón de tiempo, aproximadamente 6 semanas, en terminarlo. Lo que más me
            costó fue redux. Me averguenza un poco admitir que no pude averiguar como hacer
            20 llamadas a la API de pokeapi.co y guardarlas en un estado de redux inmutablemente. 
            Así que por desgracia eso tuve que hacerlo con un react useState.`,
            name: 'Pokedex',
            description: 'Aplicación de Pokedex. Podes hacer reseñas de los pokémons si te logeas.',
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
            description: 'Juego de Memotest. Guarda los mejores 10 Puntajes.',
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
            description: 'Un solucionador de sudokus que llama a una API para cada nuevo sudoku',
            img: sudokuImg,
            demo: 'https://heuristic-leakey-318be8.netlify.app/',
            github: 'https://github.com/pablofretes/sudoku-solver-ts'
        }
    ];

    const projectsEnglish = [
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
            to make the bars fit correctly. My Google-Fu went to a whole new level by the time I was done.`,
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
            make the sudoku board and make it responsive.`,
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
				{language === 'Spanish' ? <h2 className='skills-h2'>Proyectos</h2> : <h2 className='skills-h2'>Projects</h2>}
                {language === 'Spanish' ? (
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
                ) : (
                    <div className='projects-grid'>
                        {projectsEnglish.map((project, index) => (
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
                )}
			</div>
		</section>
    );
};

export default Projects;