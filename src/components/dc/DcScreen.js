import './DcScreen.scss';

import HeroList from '../hero/HeroList';

const DcScreen = () => {
	const dcImageUrl = 'https://wallpaper.dog/large/17219721.jpg';

	return (
		<div className='dc__container'>
			<div className='dc__image-container'>
				<img src={dcImageUrl} alt='DC Logo' className='dc__image' />
			</div>
			<div className='dc__cards-container'>
				<HeroList publisher={'DC Comics'} />
			</div>
		</div>
	);
};

export default DcScreen;
