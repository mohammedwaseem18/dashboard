import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function EmployeeList() {
  const [showModal, setShowModal] = useState(false); // State variable for controlling modal visibility
  const [taskDescription, setTaskDescription] = useState(""); // State variable to store task description
  const [subject, setSubject] = useState(""); // State variable to store task subject
  const [deadline, setDeadline] = useState(""); // State variable to store task deadline

  const handleAssignTask = (userId) => {
    // Handle task assignment for the specific user
    console.log(`Assign task for user with ID: ${userId}`);
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleTaskSubmission = () => {
    // Handle task submission
    console.log("Task Subject:", subject);
    console.log("Task Description:", taskDescription);
    console.log("Task Deadline:", deadline);
    setShowModal(false); // Close the modal after submission
    // Additional logic for task submission can be added here
  };

  return (
    <div className='waseem'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button onClick={() => handleAssignTask(1)} className="btn btn-primary">Assign Task</button>
            </td>
          </tr>
        
        </tbody>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button onClick={() => handleAssignTask(1)} className="btn btn-primary">Assign Task</button>
            </td>
          </tr>
        
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDescription">Task Description:</label>
            <textarea
              id="taskDescription"
              className="form-control"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={5}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              className="form-control"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleTaskSubmission}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeList;

