// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../assets/css/plandetails.css';

// const PlanDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [plan, setPlan] = useState(null);

//   useEffect(() => {
//     const storedPlans = JSON.parse(localStorage.getItem('plans')) || [];
//     const selectedPlan = storedPlans.find(p => p.id === id);
//     setPlan(selectedPlan);
//   }, [id]);

//   if (!plan) {
//     return <div>Plan not found</div>;
//   }

//   const handleBuyNow = () => {
//     navigate(`/buy/${id}`);
//   };

//   return (
//     <div className="plan-d">
//       <h1>{plan.title}</h1>
//       <p>{plan.description}</p>
//       <h2>Course Overview:</h2>
//       <ul>
//         {plan.coursedetail.map((course, ind) => (
//           <li key={ind}>{course}</li>
//         ))}
//       </ul>
//       <div className='price-time-box'>
//         <h3>Price: {plan.price}</h3>
//         <h3>Time: {plan.time}</h3>
//       </div>
//       <h2>Benefits:</h2>
//       <ul>
//         {plan.benefits.map((benefit, index) => (
//           <li key={index}>{benefit}</li>
//         ))}
//       </ul>
//       <div className='button-cont'>
//         <button className='b1' onClick={() => navigate('/plans')}>Back to Plans</button>
//         <button className='b2' onClick={handleBuyNow}>Buy Now</button>
//       </div>
//     </div>
//   );
// };

// export default PlanDetails;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/css/plandetails.css'; // Make sure to update the path if needed

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
    <div className="plan-container">
      <h1 className="plan-title">{plan.title}</h1>
      <p className="plan-description">{plan.description}</p>
      <h2 className="course-overview-title">Course Overview:</h2>
      <ul className="course-list">
        {plan.coursedetail.map((course, ind) => (
          <li key={ind} className="course-item">{course}</li>
        ))}
      </ul>
      <div className="price-time-container">
        <h3 className="price-time-item">Price: {plan.price}</h3>
        <h3 className="price-time-item">Time: {plan.time}</h3>
      </div>
      <h2 className="benefits-title">Benefits:</h2>
      <ul className="benefits-list">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">{benefit}</li>
        ))}
      </ul>
      <div className="button-container">
        <button className="back-button" onClick={() => navigate('/plans')}>Back to Plans</button>
        <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default PlanDetails;
