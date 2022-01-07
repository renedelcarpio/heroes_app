import './SearchScreen.scss';

import { useLocation, useNavigate } from 'react-router-dom';

import HeroCard from '../hero/HeroCard';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';

const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const [value, handleInputChange] = useForm({
		searchText: q,
	});

	const { searchText } = value;

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<div className='search__container'>
				<form onSubmit={handleSearch}>
					<input
						type='text'
						placeholder='Search your favorite superhero'
						className='search__input'
						name='searchText'
						value={searchText}
						onChange={handleInputChange}
					/>
					<button className='search__button' type='submit'>
						Search...
					</button>
				</form>
				<div className='filtered--hero'>
					{!q ? (
						<h1 className='empty--hero'>Your heroes will appear here</h1>
					) : (
						heroesFiltered.length === 0 && (
							<h1 className='empty--hero'>There is no results for: {q}</h1>
						)
					)}
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};

export default SearchScreen;
