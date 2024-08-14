


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/planmanagement.css';

const Admin = () => {
  const [plans, setPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [newPlan, setNewPlan] = useState({
    id: '',
    title: '',
    description: '',
    coursedetail: '',
    price: '',
    time: '',
    benefits: '',
    image: null
  });

  const navigate = useNavigate();

  useEffect(() => {
    const existingPlans = JSON.parse(localStorage.getItem('plans')) || [];
    setPlans(existingPlans);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingPlan) {
      setEditingPlan({ ...editingPlan, [name]: value });
    } else {
      setNewPlan({ ...newPlan, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (editingPlan) {
          setEditingPlan({ ...editingPlan, image: reader.result });
        } else {
          setNewPlan({ ...newPlan, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedPlans;
    if (editingPlan) {
      updatedPlans = plans.map(plan => 
        plan.id === editingPlan.id ? {
          ...editingPlan,
          coursedetail: editingPlan.coursedetail.split(','),
          benefits: editingPlan.benefits.split(',')
        } : plan
      );
      setEditingPlan(null);
    } else {
      const newPlanWithId = {
        ...newPlan,
        id: Date.now().toString(),
        coursedetail: newPlan.coursedetail.split(','),
        benefits: newPlan.benefits.split(',')
      };
      updatedPlans = [...plans, newPlanWithId];
    }
    setPlans(updatedPlans);
    localStorage.setItem('plans', JSON.stringify(updatedPlans));
    setNewPlan({
      id: '',
      title: '',
      description: '',
      coursedetail: '',
      price: '',
      time: '',
      benefits: '',
      image: null
    });
  };

  const handleEdit = (plan) => {
    setEditingPlan({
      ...plan,
      coursedetail: plan.coursedetail.join(','),
      benefits: plan.benefits.join(',')
    });
  };

  const handleCancelEdit = () => {
    setEditingPlan(null);
  };

  const handleDelete = (id) => {
    const updatedPlans = plans.filter(plan => plan.id !== id);
    setPlans(updatedPlans);
    localStorage.setItem('plans', JSON.stringify(updatedPlans));
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={editingPlan ? editingPlan.title : newPlan.title}
          onChange={handleInputChange}
          placeholder="Plan Title"
          required
        />
        <textarea
          name="description"
          value={editingPlan ? editingPlan.description : newPlan.description}
          onChange={handleInputChange}
          placeholder="Plan Description"
          required
        />
        <input
          type="text"
          name="coursedetail"
          value={editingPlan ? editingPlan.coursedetail : newPlan.coursedetail}
          onChange={handleInputChange}
          placeholder="Course Details (comma-separated)"
          required
        />
        <input
          type="text"
          name="price"
          value={editingPlan ? editingPlan.price : newPlan.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="time"
          value={editingPlan ? editingPlan.time : newPlan.time}
          onChange={handleInputChange}
          placeholder="Time"
          required
        />
        <input
          type="text"
          name="benefits"
          value={editingPlan ? editingPlan.benefits : newPlan.benefits}
          onChange={handleInputChange}
          placeholder="Benefits (comma-separated)"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {(editingPlan?.image || newPlan.image) && (
          <img 
            src={editingPlan ? editingPlan.image : newPlan.image} 
            alt="Plan preview" 
            style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
          />
        )}
        <button type="submit">{editingPlan ? 'Update Plan' : 'Add Plan'}</button>
        {editingPlan && (
          <button type="button" onClick={handleCancelEdit}>Cancel Edit</button>
        )}
      </form>
      <div className="existing-plans">
        <h2>Existing Plans</h2>
        <ul className="plan-list">
          {plans.map((plan) => (
            <li key={plan.id} className="plan-item">
              <span>{plan.title} - {plan.price}</span>
              {plan.image && <img src={plan.image} alt={plan.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />}
              <button onClick={() => handleEdit(plan)}>Edit</button>
              <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <button className="view-user-page" onClick={() => navigate('/plans')}>View User Page</button>
    </div>
  );
};

export default Admin;