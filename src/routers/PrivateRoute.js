import { AuthContext } from '../auth/authContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
	const { user } = useContext(AuthContext);

	return user.logged ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
