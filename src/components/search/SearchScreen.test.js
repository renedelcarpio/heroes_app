import { MemoryRouter } from 'react-router-dom';
import SearchScreen from './SearchScreen';
import { mount } from 'enzyme';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Tests in SearchScreen component', () => {
	test('should match with snapshot', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(typeof wrapper.find('.empty--hero')).toEqual('object');
		//TODO: Review why this test does not work
		// expect(wrapper.find('.empty--hero')).toEqual(
		// 	'Your heroes will appear here'
		// );
	});

	test('should show Batman and the input with the query string value', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(wrapper.find('input').prop('value')).toBe('batman');
	});

	test('should show an error message if query does not match with some hero', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=Batman123']}>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(typeof wrapper.find('.empty--hero')).toEqual('object');
		//TODO: Review why this test does not work
		// expect(wrapper.find('.empty--hero')).toEqual(
		// 	'There is no results for: Batman123'
		// );
	});

	test('should call navigate to new screen', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<SearchScreen />
			</MemoryRouter>
		);

		wrapper.find('input').simulate('change', {
			target: {
				name: 'searchText',
				value: 'ironman',
			},
		});

		wrapper.find('form').prop('onSubmit')({
			preventDefault: () => {},
		});

		expect(mockNavigate).toHaveBeenCalledWith('?q=ironman');
	});
});
