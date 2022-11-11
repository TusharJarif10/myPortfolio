import React from 'react';

const ContactInfo = ({ icon, text }) => {
	return (
		<div className='contact-info'>
			<div className='contact-icon'>{icon}</div>
			<p>{text}</p>
		</div>
	);
};

export default ContactInfo;
