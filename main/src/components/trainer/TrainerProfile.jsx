import React, { useState } from 'react';
import '../../assets/css/trainer.css';
import { useEffect } from 'react';
import axios from 'axios';

function TrainerProfile() {
  const trainerId = localStorage.getItem("trainerId");
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    specialties: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/trainer/profile/${trainerId}`);
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/trainer/profile/${trainerId}`, profile);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  return (
    <div >
      <h2>Trainer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={profile.bio} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Specialties:
          <input type="text" name="specialties" value={profile.specialties} onChange={handleInputChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default TrainerProfile;