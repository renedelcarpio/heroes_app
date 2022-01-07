import { Navigate, useParams } from 'react-router-dom';

import { getHeroById } from '../../helpers/getHeroById';

const HeroScreen = () => {
	const { heroId } = useParams();

	const hero = getHeroById(heroId);

	if (!hero) {
		return <Navigate to='/' />;
	}

	return (
		<div>
			<h1>{hero.superhero}</h1>
		</div>
	);
};

export default HeroScreen;
