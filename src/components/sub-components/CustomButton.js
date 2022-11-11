import { Link } from 'react-router-dom';

const CustomButton = ({ text, link }) => {
	return (
		<div className='btn-custom-parent'>
			<Link to={`/${link}`} className='btn-custom'>
				{text}
			</Link>
		</div>
	);
};

CustomButton.defaultProps = {
	name: 'button',
	link: '#',
};

export default CustomButton;
