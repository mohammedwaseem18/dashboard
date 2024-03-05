import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReceivedTask.css';

const ReceivedTask = ({ subject, description, deadline }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitTask = () => {
    console.log("Task Submitted!");
    setShowModal(false);
  };

  return (
    <div className='tasks'>
      <div className="taskCard">
        <div className="taskHeader">
          <p className="greeting">Hi Waseem, you have a new task</p>
          <button className='viewTaskButton' onClick={handleViewTask}>View Task</button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="taskDescription">
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Task Description:</strong> {description}</p>
            <p><strong>Deadline:</strong> {deadline}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSubmitTask}>Submit Task</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const TaskList = () => {
  return (
    <div>
      <ReceivedTask
        subject="Task Subject"
        description="Task Description"
        deadline="Task Deadline"
      />
      <ReceivedTask
        subject="Another Task Subject"
        description="Another Task Description"
        deadline="Another Task Deadline"
      />
       <ReceivedTask
        subject="Another Task Subject"
        description="Another Task Description"
        deadline="Another Task Deadline"
      />
    </div>
  );
};

export default TaskList;

