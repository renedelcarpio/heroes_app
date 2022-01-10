import { AuthContext } from '../auth/authContext';
import DashboardRoutes from './DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('Tests in DashboardRoutes component', () => {
	const contextValue = {
		user: {
			logged: true,
			name: 'userName',
		},
	};

	test('should render correctly Marvel', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/']}>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.user-name').text().trim()).toBe('userName');
		expect(wrapper.find('h1').text().trim()).toBe('Marvel Super Heroes');
	});

	test('should render correctly Dc', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/dc']}>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe('DC Super Heroes');
	});
});
