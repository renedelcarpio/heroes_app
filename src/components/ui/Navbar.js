import { Link, NavLink } from 'react-router-dom';

import React from 'react';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link className='navbar__brand' to='/'>
				Heroes App
			</Link>

			<div className='navbar__collapse'>
				<div className='navbar__nav'>
					<NavLink
						activeClassName='active'
						className='navbar__nav-item'
						exact
						to='/marvel'
					>
						Marvel
					</NavLink>

					<NavLink
						activeClassName='active'
						className='navbar__nav-item'
						exact
						to='/dc'
					>
						DC
					</NavLink>
				</div>
			</div>

			<div className='navbar__collapse'>
				<ul className='navbar__nav'>
					<NavLink
						activeClassName='active'
						className='navbar__nav-item'
						exact
						to='/login'
					>
						Logout
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};
