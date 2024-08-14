
import React from 'react';
import '../assets/css/classmanagement.css'

const ClassManagement = () => {
  return (
    <div className="class-management">
      <h2>Class Management</h2>
      <div className="card">
        <h3>Class Schedules</h3>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Trainer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beginner Yoga</td>
              <td>John Doe</td>
              <td>2023-08-10</td>
              <td>09:00 AM</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Advanced Pilates</td>
              <td>Jane Smith</td>
              <td>2023-08-11</td>
              <td>02:00 PM</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Add New Class</button>
      </div>
      <div className="card">
        <h3>Assign Trainers</h3>
        <select>
          <option>Select Class</option>
          <option>Beginner Yoga</option>
          <option>Advanced Pilates</option>
        </select>
        <select>
          <option>Select Trainer</option>
          <option>John Doe</option>
          <option>Jane Smith</option>
        </select>
        <button>Assign Trainer</button>
      </div>
      <div className="card">
        <h3>Manage Enrollments</h3>
        <select>
          <option>Select Class</option>
          <option>Beginner Yoga</option>
          <option>Advanced Pilates</option>
        </select>
        <ul>
          <li>
            <span>Sarah Johnson</span>
            <button>Remove</button>
          </li>
          <li>
            <span>Mike Brown</span>
            <button>Remove</button>
          </li>
        </ul>
        <button>Add Student</button>
      </div>
    </div>
  );
};

export default ClassManagement;