import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashboardRoutes from './DashboardRoutes';
import LoginScreen from '../components/login/LoginScreen';
import React from 'react';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginScreen />} />
				<Route path='/*' element={<DashboardRoutes />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
