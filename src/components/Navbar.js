import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar = () => {
	return (
		<div className='navbar'>
			<Container>
				<h2 className='nav-brand'>{'Peace be upon you'}</h2>
				<div className='links'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/skills'>Skills</Link>
					<Link to='/projects'>Projects</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
