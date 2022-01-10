import { AuthContext } from '../../auth/authContext';
import LoginScreen from './LoginScreen';
import { mount } from 'enzyme';
import { types } from '../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Tests in LoginScreen component', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: false,
		},
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<LoginScreen />
		</AuthContext.Provider>
	);

	test('should match with snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call dispatch and navigate', () => {
		const handleClick = wrapper.find('button').prop('onClick');
		handleClick();

		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: types.login,
			payload: { name: 'Santi' },
		});
		expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });

		localStorage.setItem('lastPath', '/dc');
		handleClick();
		expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
	});
});
