// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../assets/css/Buy.css';

// const courses = [
//   { id: 'course1', name: 'Yoga', price: 100 },
//   { id: 'course2', name: 'Pilates', price: 150 },
//   { id: 'course3', name: 'Crossfit', price: 200 }
// ];

// const Buy = () => {
//   const { id } = useParams();
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     phoneNumber: '',
//     email: ''
//   });

//   const [upi, setUpi] = useState('');
//   const [selectedTrainer, setSelectedTrainer] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const trainers = [
//     { id: 1, name: 'John Doe', rating: 4.5 },
//     { id: 2, name: 'Jane Smith', rating: 4.0 },
//     { id: 3, name: 'Alex Johnson', rating: 4.7 }
//   ];

//   useEffect(() => {
//     const course = courses.find(course => course.id === id);
//     setSelectedCourse(course);
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   const handleBuy = () => {
//     if (!selectedCourse) return;
//     console.log('User Info:', userInfo);
//     console.log('UPI Method:', upi);
//     console.log('Selected Trainer:', selectedTrainer);
//     console.log('Selected Course:', selectedCourse.name);
//     console.log('Payment Amount:', selectedCourse.price);
//     // Handle the buy action, e.g., send data to the server
//   };

//   return (
//     <div className="container">
//       <div className="form-container">
//         <h1>Buy Page for Plan ID: {id}</h1>
//         {selectedCourse && <h2>Course: {selectedCourse.name} - ${selectedCourse.price}</h2>}
//         <hr />
//         <div>
//           <h2>User Information</h2>
//           <form>
//             <label>
//               Name:
//               <input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Your Name" required />
//             </label>
//             <label>
//               Age:
//               <input type="number" name="age" value={userInfo.age} onChange={handleChange} placeholder="Your Age" required />
//             </label>
//             <label>
//               Gender:
//               <select name="gender" value={userInfo.gender} onChange={handleChange} required>
//                 <option value="">Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </label>
//             <label>
//               Phone Number:
//               <input type="tel" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChange} placeholder="03077684467" required />
//             </label>
//             <label>
//               Email:
//               <input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="xyz@gmail.com" required />
//             </label>
//           </form>
//         </div>

//         <div>
//           <h2>Payment Details</h2>
//           <label>
//             UPI Method:
//             <input type="text" value={upi} onChange={(e) => setUpi(e.target.value)} placeholder="Enter UPI ID" required />
//           </label>
//         </div>

//         <div>
//           <h2>Choose Personal Trainer</h2>
//           <select value={selectedTrainer} onChange={(e) => setSelectedTrainer(e.target.value)} required>
//             <option value="">Select Trainer</option>
//             {trainers.map(trainer => (
//               <option key={trainer.id} value={trainer.name}>
//                 {trainer.name} - {trainer.rating} ★
//               </option>
//             ))}
//           </select>
//         </div>

//         <button onClick={handleBuy}>Buy Now</button>
//       </div>
//     </div>
//   );
// }

// export default Buy;

// import React, { useState, useEffect } from 'react';
// import { useParams,useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import '../assets/css/Buy.css';

// const courses = [
//   { id: 'course1', name: 'Yoga', price: 100 },
//   { id: 'course2', name: 'Pilates', price: 150 },
//   { id: 'course3', name: 'Crossfit', price: 200 }
// ];

// const Buy = () => {
//   const { id } = useParams();
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     phoneNumber: '',
//     email: ''
//   });

//   const [upi, setUpi] = useState('');
//   const [selectedTrainer, setSelectedTrainer] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [showPopup,setShowPopup]=useState(false);

//   const navigate = useNavigate();
//   const trainers = [
//     { id: 1, name: 'John Doe', rating: 4.5 },
//     { id: 2, name: 'Jane Smith', rating: 4.0 },
//     { id: 3, name: 'Alex Johnson', rating: 4.7 }
//   ];

//   useEffect(() => {
//     const course = courses.find(course => course.id === id);
//     setSelectedCourse(course);
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   // const handleBuy = () => {
//   //   if (!selectedCourse) return;
//   //   console.log('User Info:', userInfo);
//   //   console.log('UPI Method:', upi);
//   //   console.log('Selected Trainer:', selectedTrainer);
//   //   console.log('Selected Course:', selectedCourse.name);
//   //   console.log('Payment Amount:', selectedCourse.price);
    
//   // };
//   const handleBuy = async (e) => {
//     e.preventDefault();
//     if (!selectedCourse) return;

//     try {
//       // Save purchase data to db.json
//       const purchaseData = {
//         ...userInfo,
//         upi,
//         selectedTrainer,
//         courseName: selectedCourse.name,
//         coursePrice: selectedCourse.price,
//         purchaseDate: new Date().toISOString(),
//         expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 1 month from now
//       };
      

//       await axios.post('http://localhost:3000/purchases', purchaseData);

//       // Add to admissions
//       await axios.post('http://localhost:3000/admissions', {
//         studentName: userInfo.name,
//         courseName: selectedCourse.name,
//         admissionDate: new Date().toISOString()
//       });

//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//         navigate('/'); // Redirect to home page after 3 seconds
//       }, 3000);

//     } 
//     catch (error) {
//       console.error('Error saving purchase:', error);
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error message:', error.message);
//       }
//       alert('There was an error processing your purchase. Please try again.');
//     }

//   };

//   return (
//     <div className="container">
//       <div className="form-container">
//         <h1>Buy Page for Plan ID: {id}</h1>
//         {selectedCourse && <h2>Course: {selectedCourse.name} - ${selectedCourse.price}</h2>}
//         <hr />
//         <form onSubmit={handleBuy}>
//   <div className="form-section">
//     <h2>User Information</h2>
//     <div className="form-group">
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={userInfo.name} onChange={handleChange} placeholder="Your Name" required />
//     </div>
//     <div className="form-group">
//       <label htmlFor="age">Age:</label>
//       <input type="number" id="age" name="age" value={userInfo.age} onChange={handleChange} placeholder="Your Age" required />
//     </div>
//     <div className="form-group">
//       <label htmlFor="gender">Gender:</label>
//       <select id="gender" name="gender" value={userInfo.gender} onChange={handleChange} required>
//         <option value="">Select</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//     </div>
//     <div className="form-group">
//       <label htmlFor="phoneNumber">Phone Number:</label>
//       <input type="tel" id="phoneNumber" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChange} placeholder="03077684467" required />
//     </div>
//     <div className="form-group">
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="xyz@gmail.com" required />
//     </div>
//   </div>
//   <div className="form-section">
//             <h2>Payment Details</h2>
//             <div className="form-group">
//               <label htmlFor="upi">UPI Method:</label>
//               <input type="text" id="upi" value={upi} onChange={(e) => setUpi(e.target.value)} placeholder="Enter UPI ID" required />
//             </div>
//           </div>

//           <div className="form-section">
//             <h2>Choose Personal Trainer</h2>
//             <div className="form-group">
//               <label htmlFor="trainer">Select Trainer:</label>
//               <select id="trainer" value={selectedTrainer} onChange={(e) => setSelectedTrainer(e.target.value)} required>
//                 <option value="">Select Trainer</option>
//                 {trainers.map(trainer => (
//                   <option key={trainer.id} value={trainer.name}>
//                     {trainer.name} - {trainer.rating} ★
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <button  onClick={handleBuy}>Buy Now</button>
  
  
// </form>
//       </div>
//       {showPopup && (
//         <div className="popup">
//           <p>Your plan was activated for the next 1 month. Do yoga everyday, be healthy!</p>
//         </div>
//       )} 
//     </div>
//   );
// };

// export default Buy;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/css/Buy.css'; // Make sure to create this CSS file

const Buy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: ''
  });

  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    const selectedPlan = storedPlans.find(p => p.id === id);
    setPlan(selectedPlan);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/payment/${id}`, { 
      state: { userInfo, plan },
      replace: true
    });
  };

  if (!plan) {
    return <div className="container">
      <h2 className="heading">Plan not found</h2>
    </div>;
  }

  return (
    <div className="buycontainer">
      <h1 className="buyheading">Buy {plan.title}</h1>
      <div className="buyplan-info">
        <p><strong>Price:</strong> {plan.price}</p>
        <p><strong>Time:</strong> {plan.time}</p>
      </div>
      <form onSubmit={handleSubmit} className="buyform">
        <h2 className="buysubheading">User Information</h2>
        <div className="buyinput-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buyinput-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buyinput-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={userInfo.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="buyinput-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buyinput-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buybutton-group">
          <button type="button" onClick={() => navigate('/plans')} className="back-button">
            Back to Plans
          </button>
          <button type="submit" className="submit-button">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Buy;