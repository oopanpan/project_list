import React, { useState, useEffect } from 'react';
import { Input, Col, Row, Modal } from 'antd';

import projectIcon from '../assets/defaultProjectIcon_2x.png';
import editIcon from '../assets/EditIcon.svg';
import editIconHover from '../assets/EditIcon_Hover.svg';
import deleteIcon from '../assets/DeleteIcon.svg';
import deleteIconHover from '../assets/DeleteIcon_Hover.svg';
import questionSign from '../assets/Question.svg';

import './ProjectItem.css';
import { float } from 'webidl-conversions';

function ProjectItem({ project, index, handleEditingProject, handleDelete }) {
	const [editing, setEditing] = useState(project.editing);
	const [title, setTitle] = useState(project.title);
	const [editIconSrc, setEditIconSrc] = useState(editIcon);
	const [deleteIconSrc, setDeleteIconSrc] = useState(deleteIcon);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		setEditing(project.editing);
	}, [project]);

	const handleModalOk = () => {
		handleDelete(index);
		setModalVisible(false);
	};

	return (
		<Row
			justify='start'
			align='middle'
			className='project-item-row'
			draggable
		>
			<Col xs={{ span: 4 }} sm={{ span: 4 }}>
				<img alt='project-icon' src={projectIcon} />
			</Col>
			{editing ? (
				<Col xs={{ span: 8 }} sm={{ span: 8 }}>
					<Input
						type='text'
						placeholder='Name your project'
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						onBlur={(event) =>
							handleEditingProject(event, title, index)
						}
						onPressEnter={(event) =>
							handleEditingProject(event, title, index)
						}
						autoFocus
					/>
				</Col>
			) : (
				<>
					<Col xs={{ span: 8 }} sm={{ span: 6 }}>
						<p>{project.title}</p>
					</Col>
					<Col xs={{ span: 2 }} sm={{ span: 2 }}>
						<img
							style={{ float: 'right' }}
							src={editIconSrc}
							onClick={() => setEditing(true)}
							onMouseEnter={() => setEditIconSrc(editIconHover)}
							onMouseLeave={() => setEditIconSrc(editIcon)}
							alt='edit'
						/>
					</Col>
				</>
			)}
			{project.date && (
				<>
					<Col xs={{ span: 0 }} sm={{ span: 10 }}>
						<p>{project.date}</p>
					</Col>
					<Col xs={{ span: 2 }} sm={{ span: 2 }}>
						<img
							alt='delete'
							onClick={() => setModalVisible(true)}
							onMouseEnter={() =>
								setDeleteIconSrc(deleteIconHover)
							}
							onMouseLeave={() => setDeleteIconSrc(deleteIcon)}
							src={deleteIconSrc}
						/>
					</Col>
				</>
			)}
			<Modal
				title={
					<>
						<img
							alt='question mark'
							src={questionSign}
							style={{ width: '30px', height: '30px' }}
						/>
						<p>Are you sure you want to delete this project</p>
					</>
				}
				visible={modalVisible}
				okText='Yes'
				cancelText='No'
				onOk={handleModalOk}
				onCancel={() => setModalVisible(false)}
			>
				<p>This action can't be undone</p>
			</Modal>
		</Row>
	);
}

export default ProjectItem;
