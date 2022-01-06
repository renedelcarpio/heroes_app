import './LoginScreen.scss';

import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/', { replace: true });
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
