import React, { useState } from 'react';
import '../../assets/css/trainer.css';
import axios from 'axios';
import { useEffect } from 'react';

function TrainerStudents() {

  const trainerId = localStorage.getItem("trainerId");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/getusers`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  return (
    <div>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Classes Attended</th> */}
          </tr>
        </thead>
        <tbody>
        {students.map((student) => (
          student.userName && student.email && (
            <tr key={student.id}>
              <td>{student.userName}</td>
              <td>{student.email}</td>
              {/* <td>{student.classesAttended}</td> */}
            </tr>
          )
        ))}

        </tbody>
      </table>
    </div>
  );
}

export default TrainerStudents;