import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../img/logo.png';

const NavbarEnglish = ({ setLanguage }) => {
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
							Skills
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#projects'
							data-cy='projects-button'
						>
							Projects
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#contact'
							data-cy='contact-button'
						>
							Contact Me
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
						<option value='English'>English</option>
						<option value='Spanish'>Spanish</option>
					</select>
				</ul>
			</div>
		</nav>
	);
};

export default NavbarEnglish;