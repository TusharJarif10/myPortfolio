import { Container, Row, Col } from "react-bootstrap";
import Heading from "./sub-components/Heading";
import SkillsItem from "./sub-components/SkillsItem";

const Skills = () => {
	const languages = [
		{ name: "HTML", value: 50 },
		{ name: "CSS", value: 50 },
		{ name: "JavaScript", value: 20 },
		{ name: "Java", value: 70 },
		{ name: "Python", value: 30 },
	];
	const libraryAndFramework = [
		{ name: "Bootstrap", value: 40 },
		{ name: "Flutter", value: 70 },
		{ name: "Wordpress", value: 70 },
		{ name: "Spring Boot", value: 70 },
		{ name: "React.js", value: 30 },
		{ name: "Node.js", value: 20 },
	];
	const database = [
		{ name: "MySql", value: 50 },
		{ name: "PostgresQL", value: 70 },
	];
	const utility = [
		{ name: "Git", value: 70 },
		{ name: "npm", value: 50 },
		{ name: "Maven", value: 60 },
		{ name: "Chrome Dev Tools", value: 50 },
	];
	const others = [
		{ name: "Adobe Photoshop", value: 40 },
		{ name: "Unity", value: 30 },
		{ name: "Arduino", value: 30 },
	];

	return (
		<section className="skills">
			<Container>
				<Heading text="skills" />

				{/* Language section */}
				<h4 className="skill-heading">Languages</h4>
				<Row>
					{languages.map((language) => (
						<Col md="6">
							<SkillsItem
								name={language.name}
								value={language.value}
							/>
						</Col>
					))}
				</Row>

				{/* Framework and libraries section */}
				<h4 className="skill-heading mt-5">Frameworks & Libraries</h4>
				<Row>
					{libraryAndFramework.map((language) => (
						<Col md="6">
							<SkillsItem
								name={language.name}
								value={language.value}
							/>
						</Col>
					))}
				</Row>

				{/* Database section */}
				<h4 className="skill-heading mt-5">Database</h4>
				<Row>
					{database.map((language) => (
						<Col md="6">
							<SkillsItem
								name={language.name}
								value={language.value}
							/>
						</Col>
					))}
				</Row>

				{/* Utility section */}
				<h4 className="skill-heading mt-5">Utility</h4>
				<Row>
					{utility.map((language) => (
						<Col md="6">
							<SkillsItem
								name={language.name}
								value={language.value}
							/>
						</Col>
					))}
				</Row>

				{/* Other section */}
				<h4 className="skill-heading mt-5">Others</h4>
				<Row>
					{others.map((language) => (
						<Col md="6">
							<SkillsItem
								name={language.name}
								value={language.value}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Skills;
