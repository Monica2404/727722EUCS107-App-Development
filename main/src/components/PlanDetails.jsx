import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/css/plandetails.css';

const PlanDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    const selectedPlan = storedPlans.find(p => p.id === id);
    setPlan(selectedPlan);
  }, [id]);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  const handleBuyNow = () => {
    navigate(`/buy/${id}`);
  };

  return (
    <div className="plan-d">
      <h1>{plan.title}</h1>
      <p>{plan.description}</p>
      <h2>Course Overview:</h2>
      <ul>
        {plan.coursedetail.map((course, ind) => (
          <li key={ind}>{course}</li>
        ))}
      </ul>
      <div className='price-time-box'>
        <h3>Price: {plan.price}</h3>
        <h3>Time: {plan.time}</h3>
      </div>
      <h2>Benefits:</h2>
      <ul>
        {plan.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <div className='button-cont'>
        <button className='b1' onClick={() => navigate('/plans')}>Back to Plans</button>
        <button className='b2' onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default PlanDetails;