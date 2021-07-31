import React, { useState, useEffect } from 'react';

import { Row } from 'antd';
import CollectionTitle from '../components/CollectionTitle';
import ProjectItem from '../components/ProjectItem';
import NewProjectButton from '../components/NewProjectButton';

import './ProjectListContainer.css';

function ProjectListContainer() {
	const [projectList, setProjectList] = useState([]);
	const [projectGroupClassName, setProjectGroupClassName] = useState(
		'project-entry-group'
	);

	// Here we can have a useEffect to fetch projectList from the database to
	useEffect(() => {
		if (window.innerWidth <= 576) {
			setProjectGroupClassName('project-entry-group-mobile');
		} else {
			setProjectGroupClassName('project-entry-group');
		}
	}, [window.innerWidth]);

	const renderProjects = () => {
		return projectList.map((project, index) => (
			<ProjectItem
				index={index}
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

	const handleEditingProject = (event, title, index) => {
		event.stopPropagation();
		let [, month, day, year, time] = Date().split(' ');
		let [hour, minute] = time.split(':');
		const editedProject = {
			...projectList[index],
			title: title,
			date: `${month} ${day},${year}  ${hour}:${minute}`,
			editing: false,
		};
		const updatedProjectListArray = [...projectList];
		updatedProjectListArray.splice(index, 1, editedProject);
		setProjectList(updatedProjectListArray);
	};

	const handleDelete = (index) => {
		const updatedProjectListArray = [...projectList];
		updatedProjectListArray.splice(index, 1);
		setProjectList(updatedProjectListArray);
	};

	return (
		<div className='project-container'>
			<CollectionTitle />
			<NewProjectButton addNewProject={addNewProject} />
			<div className={projectGroupClassName}>{renderProjects()}</div>
		</div>
	);
}

export default ProjectListContainer;
