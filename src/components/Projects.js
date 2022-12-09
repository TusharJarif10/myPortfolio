import { Col, Container, Row } from 'react-bootstrap';
import Heading from './sub-components/Heading';
import Project from './sub-components/Project';
import ImageHomewind from '../image/project-image/homewind.png';
import ImageNotes from '../image/project-image/notes.png';
import ImageBite from '../image/project-image/bite.png';
import ImagePopcorn from '../image/project-image/popcorn.png';
import ImageInventory from '../image/project-image/inventory-manager.png';
import ImageIronsports from '../image/project-image/ironsports.png';
import imageNicl from '../image/project-image/nicl.png';
import ImageSurveycare from '../image/project-image/surveycare.png';
import imageSwitch from '../image/project-image/switch.png';

const Projects = () => {
	const generateId = () => {
		return Math.floor(Math.random() * 10000);
	}
	const projects = [
		{
			image: `${ImageHomewind}`,
			name: 'object detection app',
			desc: 'Object detection app by tensorflow lite. which can detect different object.',
			github: 'https://github.com/TusharJarif10/Camera_visions.git',
			website: 'https://homewind.netlify.app/',
			technology: ['tensorflow lite', 'dirt', 'flutter'],
			id: generateId()
		},
		{
			image: `${ImageNotes}`,
			name: 'Angular Notes',
			desc: 'Add and delete various kind of notes. Saves data in browser storage',
			github: 'https://github.com/shofiq0023/angular-notes',
			website: 'https://shofiqul-notes.netlify.app/',
			technology: ['Bootstrap', 'Angular', 'Browser Storage'],
			id: generateId()
		},
		{
			image: `${ImageBite}`,
			name: 'Bite',
			desc: 'Food search app where you can search for food using recipe',
			github: 'https://github.com/shofiq0023/bite',
			website: 'https://shofiq0023.github.io/bite/',
			technology: ['Bootstrap', 'JavaScript', 'API'],
			id: generateId()
		},
		{
			image: `${ImagePopcorn}`,
			name: 'Popcorn',
			desc: 'Search movies by title and see the ratings from IMDB, Rotten Tomatoes',
			github: 'https://github.com/shofiq0023/popcorn',
			website: 'https://shofiq0023.github.io/popcorn/',
			technology: ['Bootstrap', 'JavaScript', 'API'],
			id: generateId()
		},
		{
			image: `${ImageInventory}`,
			name: 'Inventory Manager',
			desc: 'Add items to your inventory with price and see the total amount',
			github: 'https://github.com/shofiq0023/inventory-manager',
			website: 'https://shofiq0023.github.io/inventory-manager/',
			technology: ['CSS', 'JavaScript', 'Browser Storage'],
			id: generateId()
		},
		{
			image: `${imageSwitch}`,
			name: 'Switch',
			desc: 'A HTML, CSS project done with jQuery plugins. Converted from a PSD file',
			github: 'https://github.com/shofiq0023/switch',
			website: 'https://shofiq0023.github.io/switch/',
			technology: ['HTML', 'CSS', 'jQuery'],
			id: generateId()
		},
		{
			image: `${ImageIronsports}`,
			name: 'Ironsports BD',
			desc: 'A live ecommerce website where you can buy various kind of gym items',
			website: 'https://ironsportsbd.com/',
			technology: ['PHP', 'Wordpress'],
			id: generateId()
		},
		{
			image: `${imageNicl}`,
			name: 'NICL',
			desc: 'Bank landing page website of National Ideal Commerce Limited',
			website: 'https://nicl.com.bd/',
			technology: ['PHP', 'Wordpress', 'Elementor'],
			id: generateId()
		},
		{
			image: `${ImageSurveycare}`,
			name: 'Surveycare BD',
			desc: 'A ecommerce website where you can but digital services',
			website: 'https://surveycarebd.com/',
			technology: ['PHP', 'Wordpress', 'Elementor', 'WooCommerce'],
			id: generateId()
		},
	];
	return (
		<section className='projects'>
			<Container>
				<Heading text='My projects' />
				<Row>
					{projects.map((project) => (
						<Col md='6' lg='4' key={project.id}>
							<Project
								image={project.image}
								name={project.name}
								desc={project.desc}
								github={project.github}
								website={project.website}
								tech={project.technology}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
