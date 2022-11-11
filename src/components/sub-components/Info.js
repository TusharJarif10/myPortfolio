const Info = ({ infoHead, text }) => {
	return (
		<>
			<p>
				<span className='info-head'>{infoHead}</span>: {text}
			</p>
		</>
	);
};

export default Info;
