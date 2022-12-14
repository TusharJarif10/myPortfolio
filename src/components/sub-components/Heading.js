import React from 'react';

const Heading = ({ text }) => {
	return (
		<div>
			<h2 className='heading'>{`> ${text}`}</h2>
		</div>
	);
};

export default Heading;
