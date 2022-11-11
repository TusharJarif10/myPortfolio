import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaGithub, FaHackerrank } from "react-icons/fa";
import myImage from "../image/my-pic.jpeg";
import HeaderAddress from "./sub-components/HeaderAddress";

const Header = () => {
	return (
		<section className="header">
			<Container>
				<Row className="align-items-center">
					<Col sm md="5" className="text-center my-image-mobile">
						<Image src={myImage} fluid className="my-pic" />
					</Col>
					<Col sm md="6">
						<h2>Md. Mehedi Hasan Tushar</h2>
						<h5 className="mb-4">Java | Spring Boot | Flutter</h5>

						<HeaderAddress
							icon={<FaLinkedin />}
							name="Linkedin"
							link="https://www.linkedin.com/in/md-mehedi-hasan-tusar-b19541221/"
							linkName="linkedin.com/mehedi.hasan"
						/>
						{/* <HeaderAddress
							icon={<FaTwitter />}
							name="Twitter"
							link="https://twitter.com/shofiqul0023"
							linkName="twitter.com/shofiqulislam"
						/> */}
						<HeaderAddress
							icon={<FaGithub />}
							name="Github"
							link="https://github.com/TusharJarif10"
							linkName="github.com/TusharJarif10"
						/>
						<HeaderAddress
							icon={<FaHackerrank />}
							name="Hackerrank"
							link="https://www.hackerrank.com/h17101030"
							linkName="hackerrank.com/h17101030"
						/>
						<div className="btn-custom-parent mt-4">
							<a
								href="https://drive.google.com/uc?export=download&amp;id=1kn7Qfa6d35iPzyAOc2eoBVsxXXvbygT3"
								className="btn-custom"
							>
								Download my resume
							</a>
						</div>
					</Col>
					
					<Col sm md="3" className="text-center my-image">
						<Image src={myImage} thumbnail className="my-pic" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Header;
