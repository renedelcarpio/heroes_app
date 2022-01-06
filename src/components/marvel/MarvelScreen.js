import './MarvelScreen.scss';

import HeroList from '../hero/HeroList';

const MarvelScreen = () => {
	const marvelImageUrl =
		'https://thecouch.world/wp-content/uploads/2018/02/Marvel-Comics-Logo-Desktop-Wallpaperconv.jpg';

	return (
		<div className='marvel__container'>
			<div className='marvel__image-container'>
				<img src={marvelImageUrl} alt='DC Logo' className='marvel__image' />
			</div>
			<div className='marvel__cards-container'>
				<HeroList publisher={'Marvel Comics'} />
			</div>
		</div>
	);
};

export default MarvelScreen;
