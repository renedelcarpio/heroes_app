import { authReducer } from './authReducer';
import { types } from '../types/types';

describe('Tests in authReducer', () => {
	test('should return the default state', () => {
		const state = authReducer({ logged: false }, {});

		expect(state).toEqual({ logged: false });
	});

	test('should authenticate and set the user name', () => {
		const action = {
			type: types.login,
			payload: { name: 'userName' },
		};

		const state = authReducer({ logged: false }, action);

		expect(state).toEqual({
			logged: true,
			name: 'userName',
		});
	});

	test('should delete the username and set logged to false', () => {
		const action = {
			type: types.logout,
		};

		const state = authReducer({ logged: true, name: 'userName' }, action);

		expect(state).toEqual({ logged: false });
	});
});
