import React, { useState } from 'react';
import axios from 'axios';

function TrainerContent({ videos, addVideo }) {
  const [newVideo, setNewVideo] = useState({ title: '', link: '',description:'' });

  const handleInputChange = (e) => {
    setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/videolinks/addvideo', newVideo);
      addVideo(response.data);
      setNewVideo({ title: '', link: '',description:'' });
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  return (
    <div className="trainer-content">
      <h2>Content Management</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td>{video.title}</td>
              <td><a href={video.link} target="_blank" rel="noopener noreferrer">View Video</a></td>
              <td>{video.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Upload New Video</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={newVideo.title}
          onChange={handleInputChange}
        />
        <input
          type="url"
          name="link"
          placeholder="Video Link"
          value={newVideo.link}
          onChange={handleInputChange}
        />
         <textarea
          name="description"
          placeholder="Video Description"
          value={newVideo.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
}

export default TrainerContent;