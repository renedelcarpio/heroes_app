import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth/authContext';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
	const { user } = useContext(AuthContext);
	const { pathname, search } = useLocation();

	search
		? localStorage.setItem('lastPath', `${pathname}${search}`)
		: localStorage.setItem('lastPath', pathname);

	return user.logged ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
