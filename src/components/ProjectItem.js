import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

import projectIcon from '../assets/defaultProjectIcon_2x.png';
import editIcon from '../assets/EditIcon.svg';
import editIconHover from '../assets/EditIcon_Hover.svg';
import deleteIcon from '../assets/DeleteIcon.svg';
import deleteIconHover from '../assets/DeleteIcon_Hover.svg';

function ProjectItem({ project, id, handleEditingProject, handleDelete }) {
	const [editing, setEditing] = useState(project.editing);
	const [title, setTitle] = useState(project.title);

	useEffect(() => {
		setEditing(project.editing);
	}, [project]);

	return (
		<div className='project-item' id={id} draggable>
			<img alt='project-icon' src={projectIcon} />
			{editing ? (
				<Input
					type='text'
					placeholder='Name your project'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					onBlur={(event) => handleEditingProject(event, title)}
					onPressEnter={(event) => handleEditingProject(event, title)}
					autoFocus
				/>
			) : (
				<>
					<div>{project.title}</div>
					<img
						onClick={() => setEditing(true)}
						alt='edit'
						src={editIcon}
					/>
				</>
			)}
			{project.date && (
				<>
					<div>{project.date}</div>
					<img
						alt='delete'
						onClick={(event) => handleDelete(event)}
						src={deleteIcon}
					/>
				</>
			)}
		</div>
	);
}

export default ProjectItem;
