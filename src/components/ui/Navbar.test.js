import { AuthContext } from '../../auth/authContext';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import { mount } from 'enzyme';
import { types } from '../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Tests in Navbar component', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: true,
			name: 'Pedro',
		},
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter initialEntries={['/']}>
				<Navbar />
			</MemoryRouter>
		</AuthContext.Provider>
	);

	test('should match with snapshot', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.user-name').text().trim()).toBe('Pedro');
	});

	test('should call logout, call navigate and call dispatch', () => {
		wrapper.find('button').prop('onClick')();

		expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
		expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
