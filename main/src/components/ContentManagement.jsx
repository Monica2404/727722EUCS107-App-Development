

// import React from 'react';
import React, { useState, useEffect } from 'react';
import '../assets/css/contentmanagement.css'

const ContentManagement = () => {
  const [yogaName, setYogaName] = useState('');
    const [yogaImage, setYogaImage] = useState(null);
    const [yogaBenefits, setYogaBenefits] = useState('');
    const [yogaProcedure, setYogaProcedure] = useState('');
    const [yogaVideoUrl, setYogaVideoUrl] = useState('');
    const [message, setMessage] = useState('');
    const [yogaList, setYogaList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    const storedYogaList = JSON.parse(localStorage.getItem('yogaList')) || [];
    setYogaList(storedYogaList);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (yogaName) {
      const processYoga = (imageData) => {
        const newYoga = {
          name: yogaName,
          image: imageData,
          benefits: yogaBenefits,
          procedure: yogaProcedure,
          videoUrl: yogaVideoUrl,
          uploadDate: editIndex !== null ? yogaList[editIndex].uploadDate : new Date().toLocaleString()
        };
        
        let updatedYogaList;
        if (editIndex !== null) {
          updatedYogaList = [...yogaList];
          updatedYogaList[editIndex] = newYoga;
        } else {
          updatedYogaList = [...yogaList, newYoga];
        }
        
        setYogaList(updatedYogaList);
        localStorage.setItem('yogaList', JSON.stringify(updatedYogaList));
        
        setMessage('Yoga pose ' + (editIndex !== null ? 'updated' : 'uploaded') + ' successfully!');
        setYogaName('');
        setYogaImage(null);
        setYogaBenefits('');
        setYogaProcedure('');
        setYogaVideoUrl('');
        setEditIndex(null);
      };

      if (yogaImage) {
        const reader = new FileReader();
        reader.onload = (event) => processYoga(event.target.result);
        reader.readAsDataURL(yogaImage);
      } else if (editIndex !== null) {
        processYoga(yogaList[editIndex].image);
      } else {
        setMessage('Please provide an image for new yoga poses.');
        return;
      }
    } else {
      setMessage('Please provide a name for the yoga pose.');
    }
  };

  const handleEdit = (index) => {
    const yoga = yogaList[index];
    setYogaName(yoga.name);
    setYogaBenefits(yoga.benefits);
    setYogaProcedure(yoga.procedure);
    setYogaVideoUrl(yoga.videoUrl);
    setEditIndex(index);
    setYogaImage(null); // Reset yogaImage when starting to edit
  };

  const handleDelete = (index) => {
    const updatedYogaList = yogaList.filter((_, i) => i !== index);
    setYogaList(updatedYogaList);
    localStorage.setItem('yogaList', JSON.stringify(updatedYogaList));
    setMessage('Yoga pose deleted successfully!');
  };

  const cancelEdit = () => {
    setYogaName('');
    setYogaImage(null);
    setEditIndex(null);
  };

  return (
    <div className="content-management">
      <h2>Content Management</h2>
      {/* <div className="card">
        <h3>Review Content</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yoga for Beginners</td>
              <td>John Doe</td>
              <td>Article</td>
              <td>Pending</td>
              <td>
                <button>Approve</button>
                <button>Reject</button>
              </td>
            </tr>
            <tr>
              <td>Advanced Meditation Techniques</td>
              <td>Jane Smith</td>
              <td>Video</td>
              <td>Pending</td>
              <td>
                <button>Approve</button>
                <button>Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {/* <div className="card">
        <h3>Manage Website Content</h3>
        <select>
          <option>Select Page</option>
          <option>Home</option>
          <option>About Us</option>
          <option>Classes</option>
        </select>
        <textarea rows="10" placeholder="Enter page content here..."></textarea>
        <button>Update Content</button>
      </div> */}
      <div className="admin-container">
      <h1 className="admin-title">Yoga Academy Admin</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          className="admin-input"
          type="text"
          value={yogaName}
          onChange={(e) => setYogaName(e.target.value)}
          placeholder="Asana Name"
          required
        />
        <input
          className="admin-file-input"
          type="file"
          onChange={(e) => setYogaImage(e.target.files[0])}
          accept="image/*"
        />
        <textarea
          className="admin-textarea"
          value={yogaBenefits}
          onChange={(e) => setYogaBenefits(e.target.value)}
          placeholder="Asana Benefits"
        />
        <textarea
          className="admin-textarea"
          value={yogaProcedure}
          onChange={(e) => setYogaProcedure(e.target.value)}
          placeholder="Asana Procedure"
        />
        <input
          className="admin-input"
          type="text"
          value={yogaVideoUrl}
          onChange={(e) => setYogaVideoUrl(e.target.value)}
          placeholder="YouTube Video URL"
        />
        <div className="admin-form-buttons">
          <button className="admin-submit-button" type="submit">
            {editIndex !== null ? 'Update' : 'Upload'}
          </button>
          {editIndex !== null && (
            <button className="admin-cancel-button" type="button" onClick={cancelEdit}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {message && <p className="admin-message">{message}</p>}

      <h2 className="admin-subtitle">Uploaded Yoga Poses</h2>
      <div className="admin-yoga-list">
        {yogaList.map((yoga, index) => (
          <div key={index} className="admin-yoga-item">
            <img className="admin-yoga-image" src={yoga.image} alt={yoga.name} />
            <div className="admin-yoga-details">
              <p><strong>Name:</strong> {yoga.name}</p>
              <p><strong>Upload Date:</strong> {yoga.uploadDate}</p>
              <div className="admin-yoga-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default ContentManagement;