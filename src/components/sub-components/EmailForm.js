import { Form, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const EmailForm = () => {
	const submitHandle = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_jx0v3al',
				'template_57tpcwh',
				e.target,
				'user_W45Cekb6REobE7hu7Gpvz'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<Container>
			<Form onSubmit={submitHandle}>
				<Row>
					<Col lg className='mb-4'>
						<Form.Control
							className='input-field'
							placeholder='Your name...'
							name='name'
						/>
					</Col>
					<Col lg>
						<Form.Control
							className='input-field mb-4 mb-sm-0'
							placeholder='Your email...'
							name='email'
						/>
					</Col>
				</Row>
				<Form.Control
					className='input-field mb-4'
					placeholder='Your subject...'
					name='subject'
				/>
				<Form.Control
					className='input-field'
					as='textarea'
					placeholder='Your message....'
					name='message'
					rows={6}
				/>
				<button className='btn-submit' type='submit'>
					Send Message
				</button>
			</Form>
		</Container>
	);
};

export default EmailForm;
