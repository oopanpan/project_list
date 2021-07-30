import React from 'react';

import plusSign from '../assets/Plus Sign.svg';
import './NewProjectButton.css';

function NewProjectButton({ addNewProject }) {
	return (
		<div className='plus-sign' onClick={() => addNewProject()}>
			<img alt='Add new project' src={plusSign} />
		</div>
	);
}

export default NewProjectButton;
