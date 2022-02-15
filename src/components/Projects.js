import React from 'react';
import Slider from './Slider';
import Screenshot_memotest from '../img/Screenshot_memotest.png';
import Screenshot_pokedex from '../img/Screenshot_pokedex.png';
import Screenshot_sudoku from '../img/Screenshot_sudoku.png';
import Screenshot_sunset from '../img/Screenshot_sunset.png';

const Projects = ({ language }) => {
  const projects = [
    {
      id: 1,
      info: `Este fue el primer proyecto que hice solo.
      Tarde un montón de tiempo, aproximadamente 6 semanas, en terminarlo. Lo que más me
      costó fue redux. Me averguenza un poco admitir que no pude averiguar como hacer
      20 llamadas a la API de pokeapi.co y guardarlas en un estado de redux inmutablemente. 
      Así que por desgracia eso tuve que hacerlo con un react useState.`,
    	name: 'Pokedex',
      description: 'Aplicación de Pokedex. Podes hacer reseñas de los pokémons si te logeas.',
      img: Screenshot_pokedex,
      demo: 'https://heroku-react-pokedex.herokuapp.com',
      github: 'https://github.com/pablofretes/pokedex-react/',
    },
    {
      id: 2,
      info: `Al principio cuando me planteé este proyecto pensaba solo hacer un juego y listo. 
      Pero al final me prendí y me puse a practicar GraphQL. Tuve un montón de problemas, llamando
      incorrectamente las queries o no proveerle los paramentros correctamente, pero por suerte pude
      solucionarlos todos. Fue un desafío hacer el deployment, pero al final lo pude solucionar
      subiendo el backend a heroku y el frontend a netlify.`,
    	name: 'Memotest',
      description: 'Juego de Memotest. Guarda los mejores 10 Puntajes.',
      img: Screenshot_memotest,
      demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
      github: 'https://github.com/pablofretes/memotest-react'
    },
		{
      id: 3,
      info: `El mayor desafío de este proyecto fue el CSS. Parece bastante simple, pero no entendía hacer que los edificios 
      se alineen correctamente. Mi Google-Fu subió al siguiente nivel para cuando había terminado con esto.`,
      name: 'Atardecer',
      description: 'Si el atardecer viene del oeste, ¿qué edificios pueden verlo?',
      img: Screenshot_sunset,
      demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
      github: 'https://github.com/pablofretes/sunset-hills',
    },
		{
      id: 4,
      info: `Tuve la idea de hacer este proyecto cuando estaba haciendo un ejercicio de validación de sudoku 
      en CodeWars. Pensé "esto básicamente es media app de un solucionador de sudoku" mientras estaba por terminarlo, 
      entonces lo hice. Otra vez el estilizado fue complicado. Parece simple de nuevo pero tarde días en entender como hacer
      la mesa de sudoku en CSS, y todavía no me sale hacerlo responsivo.`,
      name: 'Sudoku Solver',
      description: 'Un solucionador de sudokus que llama a una API para cada nuevo sudoku',
      img: Screenshot_sudoku,
      demo: 'https://heuristic-leakey-318be8.netlify.app/',
      github: 'https://github.com/pablofretes/sudoku-solver-ts'
    }
  ];

  const projectsEnglish = [
    {
      id: 1,
      info: `This was the first project I made completely by myself.
      It took me a long time, aproximately 6 weeks, to finish it. The hardest part was redux. I'm a
      bit ashamed to admit that I couldn't figure out how to make 20 API calls to pokeapi.co and 
      store them immutably in redux store. So I disgracefully made a workaround with React useState.`,
      name: 'Pokedex',
      description: 'Pokedex App. You can review pokemons if you create an account.',
      img: Screenshot_pokedex,
      demo: 'https://heroku-react-pokedex.herokuapp.com',
      github: 'https://github.com/pablofretes/pokedex-react/',
    },
    {
      id: 2,
      info: `When I first started thinking about this project I was just planning on a simple game. But 
      afterwards I suddenly thought it would be fun to practice GraphQL with it. I had a lot of problems,
      calling queries incorrectly or not providing correct parameters, luckily I fixed them all. Another 
    	challenge was to deploy it online. I was finally able to do it when i uploaded the backend to heroku and the frontend to netlify.`,
      name: 'Memotest',
      description: 'Memotest Game. Stores the Top 10 HighScores',
      img: Screenshot_memotest,
      demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
      github: 'https://github.com/pablofretes/memotest-react'
    },
		{
      id: 3,
      info: `The biggest challenge on this project was CSS. It seems pretty simple, but I didn't understand how 
      to make the bars fit correctly. My Google-Fu went to a whole new level by the time I was done.`,
      name: 'Sunset Hills',
      description: 'If the sunset comes from the west, which buildings can see it?',
      img: Screenshot_sunset,
      demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
      github: 'https://github.com/pablofretes/sunset-hills',
    },
		{
      id: 4,
      info: `The idea for this project came about when I was doing an exercise on sudoku validation on CodeWars. 
      When I was about to finish it I thought "Hey, this is basically half a sudoku solver app", so I made it. Once again 
      the styling proved harder than i had previously thought. It looks simple but it took me days to understand how to 
    	make the sudoku board and make it responsive.`,
      name: 'Sudoku Solver',
      description: 'Just a sudoku solver that pulls unsolved sudokus from an API',
      img: Screenshot_sudoku,
      demo: 'https://heuristic-leakey-318be8.netlify.app/',
      github: 'https://github.com/pablofretes/sudoku-solver-ts'
    }
  ];
    return (
        <section id='projects' data-cy='projects-section'>
				{language === 'Spanish' ? <h2 className='skills-h2'>Proyectos</h2> : <h2 className='skills-h2'>Projects</h2>}
                {language === 'Spanish' ? (
                    <Slider data={projects} />
                ) : (
                    <Slider data={projectsEnglish} />
                )}
		</section>
    );
};

export default Projects;