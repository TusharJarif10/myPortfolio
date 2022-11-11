import { Container, Row, Col } from "react-bootstrap";
import Education from "./sub-components/Education";
import Heading from "./sub-components/Heading";
import Info from "./sub-components/Info";
import CustomButton from "./sub-components/CustomButton";
import Experience from "./sub-components/Experience";

const About = () => {
	return (
		<section className="about">
			<Container>
				<Heading text="About Me" />
				<div>
					<p>
					Hi, I am Md. Mehedi Hasan Tusar. I am a Java Programmer who loves to solve problems, a tech enthusiast and a self learner. 
					I am always excited about learning new things. I always thrive for perfection. I am also a hard worker who likes working with a team
					and love take challenge.
					</p>
					<Info
						infoHead="My Expertise"
						text="Java, Srping-Boot, Spring-Security, OOP, PostgresQL, MySql, Wordpress, Flutter"
					/>
					{/* <Info
						infoHead="Comfortable with"
						text="Nodejs, Expressjs, PHP, Mongodb"
					/> */}
					<CustomButton text="see my skills" link="skills" />
				</div>

				<Heading text="Personal Information" />
				<Row>
					<Col lg>
						<Info infoHead="Nationality" text="Bangladeshi" />
						<Info
							infoHead="Address"
							text="232/1, Green Resort, Green Road, Dhaka 1205"
						/>
						<Info infoHead="Country" text="Bangladesh" />
						<Info
							infoHead="Language"
							text="Bangla (Native), English"
						/>
					</Col>
					<Col lg>
						<Info
							infoHead="Email"
							text="meheditushar76@gmail.com"
						/>
						<Info infoHead="Phone" text="+880 1815028584" />
					</Col>
				</Row>

				<Heading text="Experience" />
				<Row>
					<Col lg>
						<Experience
							title="Java Programmer"
							from="September 2021"
							to="Present"
							responsibilities={[
								{ value: "Developing REST APIs",},
								{ value: "Maintaining and upgrading APIs",},
								{ value: "Database Degisn",},
								{ value: "Software Development" },
							]}
							company="CTrends Software & Services LTD"
							link="https://ctrends-software.com/"
						/>
					</Col>
					<Col lg>
						<Experience
							title="Programmer Intern"
							from="June 2021"
							to="August 2021"
							responsibilities={[
								{ value: "Learning & Working with Flutter",},
								{ value: "Learning Machine Learning(tensorflowLite)",},
								{ value: "Implement ml in Flutter app" },
								{ value: "Develop a Live object detection mobile app" },
							]}
							company="CTrends Software & Services LTD"
							link="https://ctrends-software.com/"
						/>
					</Col>
				</Row>

				<Heading text="Educational Qualification" />
				<Row>
					<Col lg>
						<Education
							title="Bachelor of Science"
							department="Computer Science & Engineering"
							from="April 2017"
							to="April 2021"
							institute="University of Asia Pacific"
						/>
						<Education
							title="Higher Secondary School Certificate"
							department="Science"
							from="May 2014"
							to="May 2016 (GPA: 5.00)"
							institute="Dhaka Residential Model College"
						/>
						<Education
							title="Secondary School Certificate"
							department="Science"
							from="Jan 2012"
							to="Feb 2014 (GPA: 5.00)"
							institute="Dhaka Residential Model College"
						/>
					</Col>
					{/* <Col lg>
						<Education
							title="Professional Web Design"
							department="Web Design"
							from="November 2018"
							to="March 2019"
							institute="UY Lab"
						/>
					</Col> */}
				</Row>
			</Container>
		</section>
	);
};

export default About;
