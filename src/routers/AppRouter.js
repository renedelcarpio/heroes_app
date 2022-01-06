import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DcScreen from '../components/dc/DcScreen';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import React from 'react';
import SearchScreen from '../components/search/SearchScreen';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/marvel' element={<MarvelScreen />} />
				<Route path='/dc' element={<DcScreen />} />
				<Route path='/search' element={<SearchScreen />} />
				<Route path='/login' element={<LoginScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
