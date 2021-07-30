import React from 'react';

import './Header.css';
import beaverLogo from '../assets/ThunkableBeaver.png';

function Header() {
	return (
		<div className='header'>
			<img alt='project_logo' src={beaverLogo} />
		</div>
	);
}

export default Header;
