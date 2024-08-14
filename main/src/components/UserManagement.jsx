
import React from 'react';
import '../assets/css/usermanagement.css'

const UserManagement = () => {
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="card">
        <h3>Manage User Roles</h3>
        <select>
          <option>Select User</option>
          <option>John Doe</option>
          <option>Jane Smith</option>
        </select>
        <select>
          <option>Select Role</option>
          <option>Trainer</option>
          <option>Student</option>
          <option>Admin</option>
        </select>
        <button>Update Role</button>
      </div>
      <div className="card">
        <h3>Approve Registrations</h3>
        <ul>
          <li>
            <span>New Trainer: Sarah Johnson</span>
            <button>Approve</button>
            <button>Deny</button>
          </li>
          <li>
            <span>New Student: Mike Brown</span>
            <button>Approve</button>
            <button>Deny</button>
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>User Activity</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Last Login</th>
              <th>Classes Attended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>2023-08-08 14:30</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>2023-08-09 10:15</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;