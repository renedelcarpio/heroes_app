import './LoginScreen.scss';

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		const action = {
			type: types.login,
			payload: { name: 'Santi' },
		};

		dispatch(action);

		const lastPath = localStorage.getItem('lastPath') || '/';

		navigate(lastPath, { replace: true });
	};

	return (
		<div className='login'>
			<h1>Login</h1>
			<hr />
			<button className='button-login' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
