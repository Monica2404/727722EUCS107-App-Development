// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/Login.css";
// import { getData } from "../assets/JSON/API";
// import Navbar from "./Navbar";
// import "../assets/css/Navbar.css";
// import Footer from "./Footer";
// import { Context } from "./GlobeData";
// import ToasterFunc from "./ToasterFunc";
// import toast from "react-hot-toast";
// import Loginimage from "../assets/images/Loginimage.jpg";
// import axios from "axios";
// import { jwtDecode } from 'jwt-decode';



// export const AdminLogin = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const navigate = useNavigate();

//     const onhandleEmail = (e) => {
//         setEmail(e.target.value);
//     };

//     const onhandlePassword = (e) => {
//         setPassword(e.target.value);
//     };

//     const onhandleSubmit = async (e) => {
//         e.preventDefault();
//         if (isSubmitting) return;

//         if (email === "") {
//             toast.error("Please enter email");
//             return;
//         } else if (password === "") {
//             toast.error("Please enter Password");
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             const response = await axios.post('http://localhost:8080/api/admin', {
//                 email: email,
//                 password: password,
//             });

//             if (response.status === 200) {
//                 const token = response.data;
//                 const decodedToken = jwtDecode(token);
//                 const role = decodedToken.Role;

//                 if (role === 'admin') {
//                     toast.success('Admin Logged In Successfully');
//                     navigate('/adminusers');
//                 } else {
//                     toast.success('Logged In Successfully');
//                     navigate('/plans');
//                 }
//             }
//         } catch (error) {
//             if (error.response) {
//                 if (error.response.status === 404) {
//                     toast.error('Admin not found!');
//                 } else if (error.response.status === 401) {
//                     toast.error('Invalid Credentials.');
//                 } else {
//                     console.error('Error:', error.message);
//                     toast.error('An error occurred. Please try again.');
//                 }
//             } else {
//                 console.error('Error:', error.message);
//                 toast.error('An error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <ToasterFunc />
//             <h1>Login</h1>
//             <div className="login-container">
//                 <img src={Loginimage} alt="Login Image" />
//                 <div className="Login">
//                     <form onSubmit={onhandleSubmit}>
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             placeholder="Enter Email"
//                             onChange={onhandleEmail}
//                             autoComplete="off"
//                         />
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             onChange={onhandlePassword}
//                             autoComplete="new-password"
//                         />
//                         <button type="submit" disabled={isSubmitting}>
//                             {isSubmitting ? 'Logging in...' : 'Login'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default AdminLogin;
// // export const AdminLogin = () => {
// //     const { LogIn, setLoggedIn } = useContext(Context);
// //     const [adminName, setadminName] = useState("");
// //     const[email,setemail]=useState("");
// //     const [password, setPassword] = useState("");
// //     const [data, setData] = useState([]);

    

// //     const navigate = useNavigate();

// //     const onhandleadminEmail = (e) => {
// //         setemail(e.target.value);
// //     };

// //     const onhandlePassword = (e) => {
// //         setPassword(e.target.value);
// //     };


// //     const onhandleSubmit = async (e) => {
// //         e.preventDefault();
    
// //         if (email === "") {
// //             toast.error("Please enter email");
// //             return;
// //         } else if (password === "") {
// //             toast.error("Please enter Password");
// //             return;
// //         }
// //         try {
// //             const response = await axios.post('http://localhost:8080/api/admin', {
// //                 email: email,
// //                 password: password,
// //             });
// //             if (response.status === 200) {
// //                 const token = response.data;
// //                 const decodedToken = jwtDecode(token);
                
// //                 const role = decodedToken.Role;
                    
// //                 if (role === 'admin') {
// //                     navigate('/adminusers');
// //                     toast.success('Admin Logged In Successfully');
// //                 } else {
// //                     navigate('/plans');
// //                     toast.success('Logged In Successfully');
// //                 }
                
// //                 // You might want to set some global state here, like:
// //                 // setLoggedIn(true);
// //                 // setUser(email);
// //             }
// //         } catch (error) {
// //             if (error.response) {
// //                 if (error.response.status === 404) {
// //                     toast.error('Admin not found!');
// //                 } else if (error.response.status === 401) {
// //                     toast.error('Invalid Credentials.');
// //                 } else {
// //                     console.log('Error:', error.message);
// //                     toast.error('An error occurred. Please try again.');
// //                 }
// //             } else {
// //                 console.log('Error:', error.message);
// //                 toast.error('An error occurred. Please try again.');
// //             }
// //         }
// //     };

   

// //     return (
// //         <div>
// //             <Navbar />
// //             <ToasterFunc />
// //             <h1>Login</h1>
// //             <div className="login-container">
// //                 <img src={Loginimage} alt="Login Image" />
// //                 <div className="Login">
// //                     <form>
// //                         <label>Email</label>
// //                         <input
// //                             type="text"
// //                             placeholder="Enter Email"
// //                             onChange={onhandleadminEmail}
// //                             autoComplete="off"
// //                         />
// //                         <label>Password</label>
// //                         <input
// //                             type="password"
// //                             placeholder="Enter Password"
// //                             onChange={onhandlePassword}
// //                             autoComplete="new-password"
// //                         />
// //                         {/* <div className="for-group">
// //                             <label htmlFor="role">Role:</label>
// //                             <select id="role" name="role" onChange={onhandleRole}>
// //                                 <option value="user">User</option>
// //                                 <option value="admin">Admin</option>
// //                             </select>
// //                         </div> */}
// //                         <button onClick={onhandleSubmit}>Login</button> 
// //                         {/* <p>
// //                             Don't have an account? <span onClick={onhandleLogin}>Sign Up</span>
// //                         </p> */}
// //                         {/* <p>Continue as <span onClick={onhandleAdminSignup}>Admin</span></p> */}
// //                     </form>
// //                 </div>
// //             </div>
// //             <div>
// //                 <Footer />
// //             </div>
// //         </div>
// //     );
// // };

// // export default AdminLogin;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/Login.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import ToasterFunc from "./ToasterFunc";
// import toast from "react-hot-toast";
// import Loginimage from "../assets/images/Loginimage.jpg";
// import axios from "axios";
// import {jwtDecode} from 'jwt-decode';

// export const AdminLogin = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const navigate = useNavigate();

//     const onhandleEmail = (e) => {
//         setEmail(e.target.value);
//     };

//     const onhandlePassword = (e) => {
//         setPassword(e.target.value);
//     };

//     const onhandleSubmit = async (e) => {
//         e.preventDefault();
//         if (isSubmitting) return;

//         if (email === "") {
//             toast.error("Please enter email");
//             return;
//         } else if (password === "") {
//             toast.error("Please enter Password");
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             const response = await axios.post('http://localhost:8080/api/admin/validate', {
//                 email: email,
//                 password: password,
//             });

//             if (response.status === 200) {
//                 const token = response.data;
//                 const decodedToken = jwtDecode(token);
//                 const role = decodedToken.Role;

//                 if (role === 'admin') {
//                     toast.success('Admin Logged In Successfully');
//                     navigate('/adminusers');
//                 } else {
//                     toast.error('You are not authorized as an admin.');
//                 }
//             }
//         } catch (error) {
//             if (error.response) {
//                 if (error.response.status === 404) {
//                     toast.error('Admin not found!');
//                 } else if (error.response.status === 401) {
//                     toast.error('Invalid Credentials.');
//                 } else {
//                     console.error('Error:', error.message);
//                     toast.error('An error occurred. Please try again.');
//                 }
//             } else {
//                 console.error('Error:', error.message);
//                 toast.error('An error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <ToasterFunc />
//             <h1>Admin Login</h1>
//             <div className="login-container">
//                 <img src={Loginimage} alt="Login Image" />
//                 <div className="Login">
//                     <form onSubmit={onhandleSubmit}>
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             placeholder="Enter Email"
//                             onChange={onhandleEmail}
//                             autoComplete="off"
//                             value={email}
//                         />
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             onChange={onhandlePassword}
//                             autoComplete="new-password"
//                             value={password}
//                         />
//                         <button type="submit" disabled={isSubmitting}>
//                             {isSubmitting ? 'Logging in...' : 'Login'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default AdminLogin;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ToasterFunc from "./ToasterFunc";
import toast from "react-hot-toast";
import axios from "axios";
import Loginimage from "../assets/images/Loginimage.jpg";

export const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const onhandleEmail = (e) => {
        setEmail(e.target.value);
    };

    const onhandlePassword = (e) => {
        setPassword(e.target.value);
    };

    const onhandleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
    
        if (email === "") {
            toast.error("Please enter email");
            return;
        } else if (password === "") {
            toast.error("Please enter Password");
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            const response = await axios.post('http://localhost:8080/api/admin/validate', {
                email: email,
                password: password,
            });
    
            if (response.status === 200) {
                toast.success('Admin Logged In Successfully');
                navigate('/adminusers');
            } else {
                toast.error('Failed to log in.');
            }
        } catch (error) {
            console.error('Error:', error.response || error.message);
            if (error.response) {
                if (error.response.status === 401) {
                    toast.error('Invalid Credentials.');
                } else {
                    toast.error('An error occurred. Please try again.');
                }
            } else {
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div>
            <Navbar />
            <ToasterFunc />
            <h1>Admin Login</h1>
            <div className="login-container">
                <img src={Loginimage} alt="Login Image" />
                <div className="Login">
                    <form onSubmit={onhandleSubmit}>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            onChange={onhandleEmail}
                            autoComplete="off"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={onhandlePassword}
                            autoComplete="new-password"
                        />
                        <button onClick={onhandleSubmit}>
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default AdminLogin;

