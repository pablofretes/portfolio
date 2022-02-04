import cssIcon from '../img/css3.svg';
import gitIcon from '../img/git.svg';
import htmlIcon from '../img/html5.svg';
import javascriptIcon from '../img/javascript.svg';
import reactIcon from '../img/react.svg';
import typescriptIcon from '../img/typescript.svg';
import graphqlIcon from '../img/graphql.svg';
import reduxIcon from '../img/redux.svg';
import nodeJSIcon from '../img/nodejs.svg';

const Skills = () => {
	const skills = [
		{ name: 'HTML', img: htmlIcon },
		{ name: 'CSS', img: cssIcon },
		{ name: 'JavaScript', img: javascriptIcon },
		{ name: 'React', img: reactIcon },
		{ name: 'Git', img: gitIcon },
        { name: 'TypeScript', img: typescriptIcon },
		{ name: 'GraphQL', img: graphqlIcon },
		{ name: 'Redux', img: reduxIcon },
		{ name: 'NodeJS', img: nodeJSIcon },
	];

	return (
		<section id='skills' data-cy='skills-section'>
			<div className='container'>
				<h2 className="skills-h2">Aptitudes</h2>
				<div className='skills-grid'>
					{skills.map(skill => (
						<div className='skill-container' key={skill.name}>
							<img src={skill.img} alt={`${skill.name}'s icon`} className='skill-icon' />
							<h3 className='skill-title'>{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;