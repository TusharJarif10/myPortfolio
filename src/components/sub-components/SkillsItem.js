import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const SkillsItem = ({ name, value }) => {
	return (
		<div className='skill-items'>
			<h5>{name}</h5>
			<div className='progress-bar-container' style={{ width: '80px' }}>
				<CircularProgressbar
					value={value}
					text={`${value}%`}
					styles={buildStyles({
						textColor: 'var(--sky-blue-color)',
						trailColor: 'rgba(255, 255, 255, 0.1)',
						pathColor: 'var(--sky-blue-color)',
					})}
				/>
			</div>
		</div>
	);
};

export default SkillsItem;
