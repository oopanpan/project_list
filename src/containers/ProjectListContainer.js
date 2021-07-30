import React, { useState } from 'react';
import CollectionTitle from '../components/CollectionTitle';

function ProjectListContainer() {
	const [projectList, setProjectList] = useState([]);

	// Here we can have a useEffect to fetch projectList from the database to

	return (
		<div>
			<CollectionTitle />
		</div>
	);
}

export default ProjectListContainer;
