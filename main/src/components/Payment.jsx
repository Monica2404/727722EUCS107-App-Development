// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import './payment.css';
// import axios from 'axios';
// const Payment = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [userInfo, setUserInfo] = useState(null);
//   const [plan, setPlan] = useState(null);
//   const [upi, setUpi] = useState('');

//   useEffect(() => {
//     if (location.state && location.state.userInfo && location.state.plan) {
//       setUserInfo(location.state.userInfo);
//       setPlan(location.state.plan);
//     } else {
//       console.error("Missing user or plan information");
//       navigate(`/buy/${id}`);
//     }
//   }, [location.state, id, navigate]);

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     console.log("Processing payment...");
//     console.log("UPI:", upi);
    
//     const buyFormData = {
//       ...userInfo,
//       upiId: upi,
//       planTitle: plan.title,
//       planPrice: plan.price,
//       planTime: plan.time,
//       purchaseDate: new Date().toISOString()
//     };
  
//     console.log("Buy form data being sent:", buyFormData);
  
//     try {
//       const response = await axios.post('http://localhost:8080/api/buyforms', buyFormData);
//       console.log("Response received:", response);
  
//       if (response.status === 201) {
//         alert("Payment Successful!!")
//       } else {
//         console.error("Unexpected response status:", response.status);
//         alert("Error processing payment or saving data. Status: " + response.status);
//       }
//     } catch (error) {
//       console.error("Error details:", error);
//       if (error.response) {
//         console.error("Error data:", error.response.data);
//         console.error("Error status:", error.response.status);
//         console.error("Error headers:", error.response.headers);
//         alert(`Error processing payment. Server responded with status ${error.response.status}`);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("No response received:", error.request);
//         alert("No response received from server. Please check your connection.");
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error("Error message:", error.message);
//         alert("Error setting up the request: " + error.message);
//       }
//     }
//   };
//   if (!userInfo || !plan) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="payment-container">
//       <h1>Payment for {plan.title}</h1>
//       <h2>Total: {plan.price}</h2>
//       <form onSubmit={handlePayment}>
//         <label>
//           UPI ID:
//           <input type="text" value={upi} onChange={(e) => setUpi(e.target.value)} required />
//         </label>
//         <button type="submit">Pay Now</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './payment.css';
import axios from 'axios';

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [plan, setPlan] = useState(null);
  const [upi, setUpi] = useState('');

  useEffect(() => {
    if (location.state && location.state.userInfo && location.state.plan) {
      setUserInfo(location.state.userInfo);
      setPlan(location.state.plan);
    } else {
      console.error("Missing user or plan information");
      navigate(`/buy/${id}`);
    }
  }, [location.state, id, navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    console.log("Processing payment...");
    console.log("UPI:", upi);

    const buyFormData = {
      ...userInfo,
      upiId: upi,
      planTitle: plan.title,
      planPrice: plan.price,
      planTime: plan.time,
      purchaseDate: new Date().toISOString()
    };

    console.log("Buy form data being sent:", buyFormData);

    try {
      const response = await axios.post('http://localhost:8080/api/buyforms', buyFormData);
      console.log("Response received:", response);

      if (response.status === 201) {
        alert("Payment Successful!!");
      } else {
        console.error("Unexpected response status:", response.status);
        alert("Error processing payment or saving data. Status: " + response.status);
      }
    } catch (error) {
      console.error("Error details:", error);
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        alert(`Error processing payment. Server responded with status ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response received from server. Please check your connection.");
      } else {
        console.error("Error message:", error.message);
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  if (!userInfo || !plan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="payment-container">
      <h1>Payment for {plan.title}</h1>
      <h2>Total: {plan.price}</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <label className="payment-label">
          UPI ID:
          <input
            type="text"
            className="payment-input"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="payment-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
