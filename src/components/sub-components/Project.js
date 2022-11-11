import { Image } from 'react-bootstrap';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

const Project = ({ name, desc, github, website, tech, image }) => {
	return (
		<div className='project-item'>
			<Image src={image} className='img-fluid' />
			<div className='project-content'>
				<h3 className='project-name'>{name}</h3>
				<p>{desc}</p>
			</div>
			<div className='project-links'>
				<p>
					{tech.map((technology) => (
						<span key={Math.floor(Math.random() * 10000)} className='tech-item'>
							{technology}
						</span>
					))}
				</p>
				{github && (
					<a
						href={`${github}`}
						target='_blank'
						rel='noreferrer'
						type='btn'
						data-toggle='toggle'
						data-placement='top'
						title='github repo'>
						{<FaGithub />}
					</a>
				)}
				<a href={`${website}`} target='_blank' rel='noreferrer'>
					{<FaExternalLinkSquareAlt />}
				</a>
			</div>
		</div>
	);
};

export default Project;
