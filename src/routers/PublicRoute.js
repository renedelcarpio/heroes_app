import { AuthContext } from '../auth/authContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const PublicRoute = ({ children }) => {
	const { user } = useContext(AuthContext);

	return user.logged ? <Navigate to='/' /> : children;
};

export default PublicRoute;
