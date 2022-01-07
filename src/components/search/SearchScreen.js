import './SearchScreen.scss';

import { useForm } from '../../hooks/useForm';

const SearchScreen = () => {
	const [value, handleInputChange] = useForm({
		searchText: '',
	});

	const { searchText } = value;

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(searchText);
	};

	return (
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
		</div>
	);
};

export default SearchScreen;
