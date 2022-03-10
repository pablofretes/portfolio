import React from 'react';
import Slider from '../slider/Slider';
import Screenshot_memotest from '../../img/Screenshot_memotest.png';
import Screenshot_pokedex from '../../img/Screenshot_pokedex.png';
import Screenshot_sudoku from '../../img/Screenshot_sudoku.png';
import Screenshot_sunset from '../../img/Screenshot_sunset.png';
import './projects.css';

const Projects = ({ language }) => {
  const projects = [
    {
      id: 1,
      info: `Este fue el primer proyecto que hice solo.
      Las tecnologías principales que use fueron NodeJS, Express, MongoDB, React, MaterialUI y CSS.`,
    	name: 'Pokedex',
      description: 'Aplicación de Pokedex. Podes hacer reseñas de los pokémons si te logeas.',
      img: Screenshot_pokedex,
      demo: 'https://heroku-react-pokedex.herokuapp.com',
      github: 'https://github.com/pablofretes/pokedex-react/',
    },
    {
      id: 2,
      info: `Al principio cuando me planteé este proyecto pensaba solo hacer un juego y listo. 
      Pero al final me puse a practicar GraphQL. Las tecnologías que use fueron React, MongoDB, MaterialUI, CSS, NodeJS y GraphQL.`,
    	name: 'Memotest',
      description: 'Juego de Memotest. Guarda los mejores 10 Puntajes.',
      img: Screenshot_memotest,
      demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
      github: 'https://github.com/pablofretes/memotest-react'
    },
		{
      id: 3,
      info: `Este proyecto lo hice para un challenge de alkemy.org. Usé ExpressJS, NodeJS, MySQL y Sequelize para hacer el backend.
			También use React, Bootstrap y un poco de CSS en el frontend.`,
      name: 'App de Balance',
      description: 'App para guardar los movimientos de tu dinero.',
      img: Screenshot_sudoku,
      demo: 'https://desolate-castle-51796.herokuapp.com/',
      github: 'https://github.com/pablofretes/balance-mysql-app'
    },
    {
      id: 4,
      info: `Saqué la idea de este proyecto de Coder Foundry. Es bastante simple pero demuestra mi manejo de listas. Para este
			proyecto use React, TypeScript y CSS.`,
      name: 'Atardecer',
      description: 'Si el atardecer viene del oeste, ¿qué edificios pueden verlo?',
      img: Screenshot_sunset,
      demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
      github: 'https://github.com/pablofretes/sunset-hills',
    },
  ];

  const projectsEnglish = [
    {
      id: 1,
      info: `This was the first project I made completely by myself.
			The technologies I used are NodeJS, Express, MongoDB, React, MaterialUI and CSS.`,
      name: 'Pokedex',
      description: 'Pokedex App. You can review pokemons if you create an account.',
      img: Screenshot_pokedex,
      demo: 'https://heroku-react-pokedex.herokuapp.com',
      github: 'https://github.com/pablofretes/pokedex-react/',
    },
    {
      id: 2,
      info: `When I first started thinking about this project I was just planning on a simple game. 
			But afterwards I suddenly thought it would be fun to practice GraphQL with it. The tchnologies i used are React, MongoDB, MaterialUI, 
			CSS, NodeJS and GraphQL`,
      name: 'Memotest',
      description: 'Memotest Game. Stores the Top 10 HighScores',
      img: Screenshot_memotest,
      demo: 'https://jovial-hermann-5ee9b5.netlify.app/',
      github: 'https://github.com/pablofretes/memotest-react'
    },
		{
      id: 3,
      info: `I built this project for an alkemy.org challenge. I used ExpressJS, NodeJS, MySQL and Sequelize to build the backend.
			And the frontend uses React, Bootstrap and some CSS.`,
      name: 'App de Balance',
      description: 'App para guardar los movimientos de tu dinero.',
      img: Screenshot_sudoku,
      demo: 'https://desolate-castle-51796.herokuapp.com/',
      github: 'https://github.com/pablofretes/balance-mysql-app'
    },
    {
      id: 4,
      info: `I took inspiration for this project from a Coder Foundry Challenge. It seems pretty simple, but it shows my list management. 
			I used React, TypeScript and CSS.`,
      name: 'Sunset Hills',
      description: 'If the sunset comes from the west, which buildings can see it?',
      img: Screenshot_sunset,
      demo: 'https://stupefied-khorana-28e1f2.netlify.app/',
      github: 'https://github.com/pablofretes/sunset-hills',
    },
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