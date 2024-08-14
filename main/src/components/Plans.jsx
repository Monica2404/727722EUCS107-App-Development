// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import '../assets/css/Plans.css';
// import plan1 from '../assets/images/plan1.webp';
// import plan2 from '../assets/images/plan2.webp';
// import plan3 from '../assets/images/plan3.webp';
// import plan4 from '../assets/images/plan4.webp';
// import plan5 from '../assets/images/plan5.webp';
// import plan6 from '../assets/images/plan6.webp';

// const Plans = () => {
//   const navigate = useNavigate();

//   const handleViewDetails = (id) => {
//     navigate(`/details/${id}`);
//   };

//   const handleBuyNow = (id) => {
//     navigate(`/buy/${id}`);
//   };

//   return (
//     <div className='plan'>
//       <Navbar />
//       <h1>Popular Yoga Plans At Our Academy</h1>
//       <div className='planlist1'>
//         <div className='planItem'>
//           <div className='planPic'>
//             <img src={plan1} alt='plan1' width={'300px'} height={"200px"} />
//           </div>
//           <div className='planText'>
//             <h2>Quick Bite Yoga</h2>
//             <p>₹999</p>
//             <p>05:30 am - 06:15 am</p>
//             <button className='viewDetails' onClick={() => handleViewDetails(1)}>View Details</button>
//             <button className='buyNow' onClick={() => handleBuyNow(1)}>Buy Now</button>
//           </div>
//         </div>
//         <div className='planItem'>
//           <div className='planPic'>
//             <img src={plan2} alt='plan2' />
//           </div>
//           <div className='planText'>
//             <h2>Yoga For Beginners</h2>
//             <p>₹499</p>
//             <p>05:00 pm - 06:00 pm</p>
//             <button className='viewDetails' onClick={() => handleViewDetails(2)}>View Details</button>
//             <button className='buyNow' onClick={() => handleBuyNow(2)}>Buy Now</button>
//           </div>
//         </div>
//         <div className='planItem'>
//           <div className='planPic'>
//             <img src={plan3} alt='plan3' />
//           </div>
//           <div className='planText'>
//             <h2>Meditation Weekend</h2>
//             <p>₹799</p>
//             <p>05:30 am - 06:15 am</p>
//             <button className='viewDetails' onClick={() => handleViewDetails(3)}>View Details</button>
//             <button className='buyNow' onClick={() => handleBuyNow(3)}>Buy Now</button>
//           </div>
//         </div>
//       </div>
//       <div className='planlist2'>
//         <div className='planItem'>
//           <div className='planPic'>
//             <img src={plan4} alt='plan4' />
//           </div>
//           <div className='planText'>
//             <h2>Personalized Yoga Session</h2>
//             <p>₹9999</p>
//             <p>Flexible time</p>
//             <button className='viewDetails' onClick={() => handleViewDetails(4)}>View Details</button>
//             <button className='buyNow' onClick={() => handleBuyNow(4)}>Buy Now</button>
//           </div>
//         </div>
//         <div className='planItem'>
//           <div className='planPic'>
//             <img src={plan5} alt='plan5' />
//           </div>
//           <div className='planText'>
//             <h2>Fitness Yoga</h2>
//             <p>₹399</p>
//             <p>07:00 am - 08:00 am</p>
//             <button className='viewDetails' onClick={() => handleViewDetails(5)}>View Details</button>
//             <button className='buyNow' onClick={() => handleBuyNow(5)}>Buy Now</button>
//           </div>
//         </div>
//         <div className='planItem'>
//           <div className='planPic'>
//             <img src={plan6} alt='plan6' />
//           </div>
//           <div className='planText'>
//             <h2>Evening Yoga</h2>
//             <p>₹399</p>
//             <p>05:00 pm - 06:00 pm</p>
//             <button className='viewDetails' onClick={() => handleViewDetails(6)}>View Details</button>
//             <button className='buyNow' onClick={() => handleBuyNow(6)}>Buy Now</button>
//           </div>
//         </div>
//       </div>
//       <Footer style={{ position: "absolute", top: "975px" }} />
//     </div>
//   )
// }

// export default Plans;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import '../assets/css/Plans.css';
// import plan1 from '../assets/images/plan1.webp';
// import plan2 from '../assets/images/plan2.webp';
// import plan3 from '../assets/images/plan3.webp';
// import plan4 from '../assets/images/plan4.webp';
// import plan5 from '../assets/images/plan5.webp';
// import plan6 from '../assets/images/plan6.webp';

// const Plans = () => {
//   const navigate = useNavigate();
//   const [hoveredPlan, setHoveredPlan] = useState(null);

//   const handleViewDetails = (id) => {
//     navigate(`/details/${id}`);
//   };

//   const handleBuyNow = (id) => {
//     navigate(`/buy/${id}`);
//   };

//   const planDetails = {
//     1: "Quick Bite Yoga is perfect for busy individuals. This 45-minute session focuses on essential yoga poses and breathing techniques to energize your day.",
//     2: "Yoga For Beginners introduces fundamental poses and breathing exercises. Ideal for those new to yoga or looking to refine their basic techniques.",
//     3: "Meditation Weekend offers a peaceful retreat to learn and practice various meditation techniques, promoting mental clarity and relaxation.",
//     4: "Personalized Yoga Sessions provide one-on-one instruction tailored to your specific needs and goals, with flexible scheduling options.",
//     5: "Fitness Yoga combines traditional yoga poses with more dynamic movements to improve strength, flexibility, and overall fitness.",
//     6: "Evening Yoga helps you unwind after a long day, focusing on relaxation techniques and gentle stretches to promote better sleep and stress relief."
//   };

//   const renderPlanItem = (planId, image, title, price, time) => (
//     <div className='planItem'>
//       <div className='planPic'>
//         <img src={image} alt={`plan${planId}`} width={'300px'} height={"200px"} />
//       </div>
//       <div className='planText'>
//         <h2>{title}</h2>
//         <p>{price}</p>
//         <p>{time}</p>
//         <div className='button-container'>
//           <div className='details-button-container'>
//             <button 
//               className='viewDetails' 
//               onMouseEnter={() => setHoveredPlan(planId)}
//               onMouseLeave={() => setHoveredPlan(null)}
//               onClick={() => handleViewDetails(planId)}
//             >
//               View Details
//             </button>
//             {hoveredPlan === planId && (
//               <div className='details-popup'>
//                 <p>{planDetails[planId]}</p>
//               </div>
//             )}
//           </div>
//           <button className='buyNow' onClick={() => handleBuyNow(planId)}>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className='plan'>
//       <Navbar />
//       <h1>Popular Yoga Plans At Our Academy</h1>
//       <div className='planlist1'>
//         {renderPlanItem(1, plan1, "Quick Bite Yoga", "₹999", "05:30 am - 06:15 am")}
//         {renderPlanItem(2, plan2, "Yoga For Beginners", "₹499", "05:00 pm - 06:00 pm")}
//         {renderPlanItem(3, plan3, "Meditation Weekend", "₹799", "05:30 am - 06:15 am")}
//       </div>
//       <div className='planlist2'>
//         {renderPlanItem(4, plan4, "Personalized Yoga Session", "₹9999", "Flexible time")}
//         {renderPlanItem(5, plan5, "Fitness Yoga", "₹399", "07:00 am - 08:00 am")}
//         {renderPlanItem(6, plan6, "Evening Yoga", "₹399", "05:00 pm - 06:00 pm")}
//       </div>
//       <Footer style={{ position: "absolute", top: "975px" }} />
//     </div>
//   );
// };

// export default Plans;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Plans.css';

const Plans = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch plans from local storage
    const storedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    setPlans(storedPlans);
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const handleBuyNow = (id) => {
    navigate(`/buy/${id}`);
  };

  const renderPlanItem = (plan) => (
    <div className='planItem' key={plan.id}>
      <div className='planPic'>
        {/* <img src={/placeholder/${plan.id}.jpg} alt={plan.title} width={'300px'} height={"200px"} /> */}
        {plan.image && <img src={plan.image} alt={plan.title} />}
      </div>
      <div className='planText'>
        <h2>{plan.title}</h2>
        <p>{plan.price}</p>
        <p>{plan.time}</p>
        <div className='button-container'>
          <div className='details-button-container'>
            <button 
              className='viewDetails' 
              onClick={() => handleViewDetails(plan.id)}
            >
              View Details
            </button>
          </div>
          <button className='buyNow' onClick={() => handleBuyNow(plan.id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className='plan'>
      <h1>Popular Yoga Plans At Our Academy</h1>
      <div className='planlist'>
        {plans.map(renderPlanItem)}
      </div>
    </div>
  );
};

export default Plans;