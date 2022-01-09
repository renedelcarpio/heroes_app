import './Navbar.scss';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import { AuthContext } from '../../auth/authContext';

export const Navbar = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log(user);

	const handleLogout = () => {
		navigate('/login', { replace: true });
	};

	return (
		<nav className='navbar'>
			<Link className='navbar__brand' to='/'>
				Heroes App
			</Link>

			<div className='navbar__heroes'>
				<div className='navbar__nav'>
					<NavLink
						className={({ isActive }) =>
							'navbar__nav-item ' + (isActive ? 'marvel-active' : '')
						}
						to='/marvel'
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							'navbar__nav-item ' + (isActive ? 'dc-active' : '')
						}
						to='/dc'
					>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							'navbar__nav-item ' + (isActive ? 'search-active' : '')
						}
						to='/search'
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className='navbar__login'>
				<ul className='navbar__nav name-button'>
					<span className='navbar__nav-item user-name'>{user.name}</span>
					<button className='navbar__nav-item button' onClick={handleLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
