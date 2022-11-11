import React from 'react';

const Education = ({ title, department, from, to, institute }) => {
	return (
		<div className='education-info'>
			<h4>{title}</h4>
			<h6 className='mb-2'>{department}</h6>
			<p>
				{from} to {to}
			</p>
			<h5>{institute}</h5>
		</div>
	);
};

export default Education;
