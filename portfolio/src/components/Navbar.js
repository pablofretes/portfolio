import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub } from 'react-icons/fa';
import logo from '../img/logo.png';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='container-navbar'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							href='#home'
						>
							<img src={logo} alt='logo'/>
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#skills'
						>
							Conocimientos
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#projects'
						>
							Projectos
						</AnchorLink>
					</li>
					<li className='nav-item'>
						<AnchorLink
                            className='nav-a navbar-words'
							offset='80'
							href='#contact'
						>
							Contactame
						</AnchorLink>
					</li>
                    <li className='nav-item'>
                        <Link
                            to={{ pathname: 'https://github.com/pablofretes' }}
                            target='_blank'
                        >
                            <FaGithub className='social-icon' />
                        </Link>
                    </li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;