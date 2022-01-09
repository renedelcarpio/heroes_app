import AppRouter from './routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { useReducer } from 'react';

const HeroesApp = () => {
	const init = () => {
		return {
			logged: true,
			name: 'Pancho temporal',
		};
	};
	const [user, dispatch] = useReducer(authReducer, {}, init);
	return (
		<AuthContext.Provider
			value={{
				user,
				dispatch,
			}}
		>
			<AppRouter />
		</AuthContext.Provider>
	);
};

export default HeroesApp;
