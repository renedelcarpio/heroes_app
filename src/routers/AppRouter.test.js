import AppRouter from './AppRouter';
import { AuthContext } from '../auth/authContext';
import { mount } from 'enzyme';

describe('Tests in AppRouter component', () => {
	test('should show login if user is not authenticated', () => {
		const contextValue = {
			user: {
				logged: false,
			},
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe('Login');
	});

	test('should show main page if user is authenticated', () => {
		const contextValue = {
			user: {
				logged: true,
				name: 'userName',
			},
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.navbar').exists()).toBe(true);
	});
});
