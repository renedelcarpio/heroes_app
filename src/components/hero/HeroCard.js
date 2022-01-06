import './HeroCard.scss';

import { Link } from 'react-router-dom';

const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const imagePath = `/assets/${id}.jpg`;

	return (
		<div className='card'>
			<div className='card__image-container'>
				<img src={imagePath} alt={superhero} width={250} height={300} />
			</div>
			<div className='card__info-container'>
				<h2>{superhero}</h2>
				<h3>{alter_ego}</h3>
				{alter_ego !== characters && <p>{characters}</p>}
				<Link to={`/hero/${id}`} className='card__link'>
					More...
				</Link>
			</div>
		</div>
	);
};

export default HeroCard;
