import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub } from 'react-icons/fa';
import logo from '../img/logo.png';

const Navbar = () => {
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
							Projectos
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
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;