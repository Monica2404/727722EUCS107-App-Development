import React, { useState } from 'react';
import axios from 'axios';

function TrainerClasses({ classes, addClass }) {
  const [newClass, setNewClass] = useState({ name: '', date: '', time: '' });

  const handleInputChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/trainerclass/addClass', newClass);
      addClass(response.data);
      setNewClass({ name: '', date: '', time: '' });
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };


  return (
    <div className="trainer-classes">
      <h2>Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.date}</td>
              <td>{c.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add New Class</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Class Name"
          value={newClass.name}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newClass.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newClass.time}
          onChange={handleInputChange}
        />
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
}

export default TrainerClasses;