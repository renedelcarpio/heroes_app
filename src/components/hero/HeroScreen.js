import './HeroScreen.scss';

import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { getHeroById } from '../../helpers/getHeroById';
import { useMemo } from 'react';

const HeroScreen = () => {
	const { heroId } = useParams();
	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(heroId), [heroId]);

	const handleReturn = () => {
		navigate(-1);
	};

	if (!hero) {
		return <Navigate to='/' />;
	}

	const { id, superhero, alter_ego, publisher, first_appearance, characters } =
		hero;

	const imagePath = `/assets/${id}.jpg`;

	return (
		<div
			className={
				publisher === 'DC Comics'
					? 'hero__container dc'
					: 'hero__container marvel'
			}
		>
			<div className='hero__card'>
				<img
					src={imagePath}
					alt={superhero}
					width={400}
					className='hero__image'
				/>
				<div>
					<h3 className='hero__title'>{superhero}</h3>
					<ul>
						<li className='hero__info'>
							<b>Alter ego: </b>
							{alter_ego}
						</li>
						<li className='hero__info'>
							<b>Publisher: </b>
							{publisher}
						</li>
						<li className='hero__info'>
							<b>First appearance: </b>
							{first_appearance}
						</li>
					</ul>
					<h5 className='hero__characters--title'>Characters</h5>
					<p className='hero__info'>{characters}</p>
					<button className='hero__button' onClick={handleReturn}>
						Return
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroScreen;
