import React, { useState } from 'react';
import CollectionTitle from '../components/CollectionTitle';

import ProjectItem from '../components/ProjectItem';
import NewProjectButton from '../components/NewProjectButton';

function ProjectListContainer() {
	const [projectList, setProjectList] = useState([]);

	// Here we can have a useEffect to fetch projectList from the database to

	const renderProjects = () => {
		return projectList.map((project, index) => (
			<ProjectItem
				id={index}
				key={index}
				project={project}
				handleEditingProject={handleEditingProject}
				handleDelete={handleDelete}
			/>
		));
	};

	const addNewProject = () => {
		const newProject = {
			title: '',
			editing: true,
		};
		const newProjectList = [...projectList, newProject];
		setProjectList(newProjectList);
	};

	const handleEditingProject = (event, title) => {
		event.stopPropagation();
		const targetedIndex = event.target.parentNode.id;
		const editedProject = {
			...projectList[targetedIndex],
			title: title,
			date: Date(),
			editing: false,
		};
		const updatedProjectListArray = [...projectList];
		updatedProjectListArray.splice(targetedIndex, 1, editedProject);
		setProjectList(updatedProjectListArray);
	};

	const handleDelete = (event) => {
		event.stopPropagation();
		const targetedIndex = event.target.parentNode.id;
		console.log(targetedIndex);
		const updatedProjectListArray = [...projectList];
		updatedProjectListArray.splice(targetedIndex, 1);
		setProjectList(updatedProjectListArray);
	};

	return (
		<div className='project-container'>
			<CollectionTitle />
			<NewProjectButton addNewProject={addNewProject} />
			<div>{renderProjects()}</div>
		</div>
	);
}

export default ProjectListContainer;
