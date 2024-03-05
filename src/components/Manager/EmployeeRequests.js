import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './EmployeeRequests.css';

const EmployeeRequests = ({ requester, leaveType, startDate, endDate, reason, onRequestAccept, onRequestReject }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewRequest = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptLeave = () => {
    // Add logic for accepting leave request
    onRequestAccept();
    setShowModal(false);
  };

  const handleRejectLeave = () => {
    // Add logic for rejecting leave request
    onRequestReject();
    setShowModal(false);
  };

  return (
    <div className='leave'>
      <div className="received-task-container">
        <div className="text-and-buttons">
          <div className="requester-text">
            <p><strong>There's a request from waseem{requester}</strong></p>
          </div>
          <div className="button-container">
            <button onClick={handleViewRequest} className="view-request-button">View Request</button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Leave Request Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Leave Type:</strong> {leaveType}sick leave</p>
          <p><strong>Start Date:</strong> {startDate}18-02-2004</p>
          <p><strong>End Date:</strong> {endDate}18-02-2002</p>
          <p><strong>Reason:</strong> {reason} as i'm not feeling well i want a leave</p>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="success" onClick={handleAcceptLeave}>Accept Leave</Button>
          <Button variant="danger" onClick={handleRejectLeave}>Reject Leave</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeRequests;


