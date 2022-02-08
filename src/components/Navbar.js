import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../img/logo.png';

const Navbar = ({ setLanguage }) => {
	const handleSelect = (event) => {
		const language = event.target.value;
		setLanguage(language);
	}
	return (
		<nav className='nav' data-cy='navbar'>
			<div className='container-navbar'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							href='#home'
							data-cy='home-button'
						>
							<div className='nav-item'>
							<img src={logo} alt='logo' className='nav-logo'/>
							</div>
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#skills'
							data-cy='skills-button'
						>
							Conocimientos
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#projects'
							data-cy='projects-button'
						>
							Proyectos
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#contact'
							data-cy='contact-button'
						>
							Contactame
						</AnchorLink>
					</li>
                    <li className='nav-item'>
                        <a
                            href='https://github.com/pablofretes'
							rel="noreferrer"
                            target='_blank'
							data-cy='link-github'
                        >
                            <FaGithub className='social-icon' data-cy='github-button'/>
                        </a>
                    </li>
					<li className='nav-item'>
                        <a
                            href='https://www.linkedin.com/in/pablo-fretes-58331b218/'
							rel="noreferrer"
                            target='_blank'
							data-cy='link-linkedin'
                        >
                            <FaLinkedin className='social-icon' data-cy='linkedin-button'/>
                        </a>
                    </li>
					<select onChange={handleSelect} className='select-language'>
						<option value='Spanish'>Español</option>
						<option value='English'>Ingles</option>
					</select>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;