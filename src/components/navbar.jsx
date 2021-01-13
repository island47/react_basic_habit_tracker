import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
	return (
		<header className="header">
			<i className="fas fa-leaf header-logo"></i>
			<span>Habit Tracker</span>
			<span className="header-count">{totalCount}</span>
		</header>
	);
});

export default Navbar;
