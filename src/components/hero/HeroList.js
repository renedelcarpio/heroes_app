import './HeroList.scss';

import HeroCard from './HeroCard';
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher';
import { useMemo } from 'react';

const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className='card__container'>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};

export default HeroList;
