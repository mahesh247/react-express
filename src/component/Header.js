import React from 'react';
import HeaderContainer from './HeaderContainer';
import Navigation from './Navigation';

const Header = () => {
	return (
		<div id="main">
			<header id="header">
				<HeaderContainer />
				<Navigation />
			</header>
		</div>
	);
};

export default Header;
