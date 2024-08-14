
import React from 'react';
import '../assets/css/notification.css'

const Notifications = () => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <div className="card">
        <h3>Alert Settings</h3>
        <div className="setting">
          <label>
            <input type="checkbox" /> Class Cancellations
          </label>
        </div>
        <div className="setting">
          <label>
            <input type="checkbox" /> New Registrations
          </label>
        </div>
        <div className="setting">
          <label>
            <input type="checkbox" /> Payment Issues
          </label>
        </div>
        <div className="setting">
          <label>
            <input type="checkbox" /> Low Class Attendance
          </label>
        </div>
        <button>Save Settings</button>
      </div>
      <div className="card">
        <h3>Recent Alerts</h3>
        <ul>
          <li>
            <strong>Class Cancellation:</strong> Yoga Basics (08/10/2023) has been cancelled.
            <span className="timestamp">2 hours ago</span>
          </li>
          <li>
            <strong>New Registration:</strong> Sarah Johnson has registered as a new student.
            <span className="timestamp">1 day ago</span>
          </li>
          <li>
            <strong>Payment Issue:</strong> Failed payment for user John Doe.
            <span className="timestamp">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;