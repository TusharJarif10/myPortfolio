import React from 'react';

const HeaderAddress = ({ icon, name, link, linkName }) => {
	return (
		<div>
			<p>
				{icon} {name}: <a href={link}>{linkName}</a>
			</p>
		</div>
	);
};

export default HeaderAddress;
