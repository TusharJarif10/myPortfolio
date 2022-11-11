import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Experience = ({ title, from, to, responsibilities, company, link}) => {
	return (
		<div className='education-info'>
			<h4>{title}</h4>
			<p>
				{from} to {to}
			</p>
            <ul className="experience-list">
                {responsibilities.map((res) => (
                    <li><span>{res.value}</span></li>
                ))}
            </ul>
			<h5>{company} {link && <a href={link} target='_blank' rel="noreferrer">{<FaExternalLinkSquareAlt/>}</a>}</h5>
            
		</div>
	);
};

export default Experience;