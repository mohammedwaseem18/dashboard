import React, { useState } from 'react';
import './EmployeeDashboard.css'

import ReceivedTask from './ReceivedTask'; // Import ReceivedTask component
import RequestLeave from './RequestLeave';
import LeaveRequestStatus from './LeaveRequestStatus';

import EmployeeRequests from '../Manager/EmployeeRequests'; // Import EmployeeRequests component
import CompletedTask from '../Manager/CompletedTask'; // Import CompletedTask component

import Avatar from '@mui/material/Avatar'; // Import Avatar component from Material-UI
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

function EmployeeDashboard() {
  const [showReceivedTaskPanel, setShowReceivedTaskPanel] = useState(false);
  const [showRequestLeave, setShowRequestLeave] = useState(false);
  const [showEmployeeRequests, setShowEmployeeRequests] = useState(false);
  const [showCompletedTask, setShowCompletedTask] = useState(false); // Added state for CompletedTask
  const [showLeaveRequestStatus, setShowLeaveRequestStatus] = useState(false); 

  const toggleReceivedTaskPanel = () => {
    setShowReceivedTaskPanel(!showReceivedTaskPanel);
    setShowRequestLeave(false);
    setShowEmployeeRequests(false);
    setShowCompletedTask(false); // Close CompletedTask component
  };

  const toggleRequestLeave = () => {
    setShowRequestLeave(!showRequestLeave);
    setShowReceivedTaskPanel(false);
    setShowEmployeeRequests(false);
    setShowCompletedTask(false); // Close CompletedTask component
  };

  const toggleEmployeeRequests = () => {
    setShowEmployeeRequests(!showEmployeeRequests);
    setShowReceivedTaskPanel(false);
    setShowRequestLeave(false);
    setShowCompletedTask(false); // Close CompletedTask component
  };

  const toggleCompletedTask = () => {
    setShowCompletedTask(!showCompletedTask);
    setShowReceivedTaskPanel(false);
    setShowRequestLeave(false);
    setShowEmployeeRequests(false);
  };

  const toggleLeaveRequestStatus = () => {
    setShowLeaveRequestStatus(!showLeaveRequestStatus); // Toggle the leave request status panel
    setShowReceivedTaskPanel(false);
    setShowRequestLeave(false);
    setShowEmployeeRequests(false);
    setShowCompletedTask(false);
  };


  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle the file upload, e.g., save it to state or send it to the server
    console.log('Uploaded file:', file);
  };

  return (
    <div className="employee-dashboard-container">
      <div className="left-panel">
        <div className="logo">
          <label htmlFor="avatar-upload">
            <Avatar sx={{ width: 100, height: 80 }} />
            <span style={{ fontWeight: 'bold', color: 'white' }}>Waseem</span> {/* Add margin for spacing */}
            <input
              type="file"
              id="avatar-upload"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="menu">
          <div className="menu-item">
            <GridViewOutlinedIcon />
            <span>Dashboard</span>
          </div>

          <div className="menu-item" onClick={toggleReceivedTaskPanel}>
            <ThreePOutlinedIcon />
            <span>Received Tasks</span>
          </div>

          <div className="menu-item" onClick={toggleRequestLeave}>
            <HomeOutlinedIcon />
            <span>Request Leave</span>
          </div>

          <div className="menu-item" onClick={toggleLeaveRequestStatus}>
            <ForwardToInboxOutlinedIcon/>
            <span>Status</span>
          </div>

         

          <div className="menu-item">
            <MedicalInformationOutlinedIcon />
            <span>Health </span>
          </div>


          <div className="menu-item">
            <AccountCircleOutlinedIcon />
            Profile
          </div>

          <div className="menu-item">
            <QuizOutlinedIcon />
            <span>F.A.Q</span>
          </div>

          <div className="menu-item">
            <ExitToAppOutlinedIcon />
            LogOut
          </div>
        </div>
      </div>
      <div className="content">
        <div className="navbar">
          <div className="icons">
          <MessageIcon sx={{ width: 40, height: 40 }}/>
            <NotificationsIcon sx={{ width: 40, height: 40 }}/>
          </div>
        </div>
        <div className="right-panel">
          {showReceivedTaskPanel && <ReceivedTask />}
          {showRequestLeave && <RequestLeave />}
          {showEmployeeRequests && <EmployeeRequests />}
          {showCompletedTask && <CompletedTask />}
          {showLeaveRequestStatus&&<LeaveRequestStatus/>}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;

