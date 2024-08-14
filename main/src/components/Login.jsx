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

// export const Login = () => {
//     const { LogIn } = useContext(Context);

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("user");
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetch = async () => {
//             const res = await getData();
//             setData(res.data);
//         };
//         fetch();
//     }, []);

//     const navigate = useNavigate();

//     const onhandleUsername = (e) => {
//         setUsername(e.target.value);
//     };

//     const onhandlePassword = (e) => {
//         setPassword(e.target.value);
//     };

//     const onhandleRole = (e) => {
//         setRole(e.target.value);
//     };

//     const onhandleLogin = (e) => {
//         navigate("/Signup");
//     };

   
//     const onhandleSubmit = async (e) => {
//         e.preventDefault();
    
//         if (username === "") {
//             toast.error("Please enter Username");
//             return;
//         } else if (password === "") {
//             toast.error("Please enter Password");
//             return;
//         }
    
//         // Standard admin credentials check
//         if (username === "Admin" && password === "Admin@123") {
//             navigate("/adminUsers");
//             return;
//         }
    
//         try {
//             const response = await axios.get("http://localhost:3000/UserData");
    
//             if (response.data.length > 0) {
//                 const user = response.data.find(
//                     (user) => user.username === username && user.password === password
//                 );
    
//                 if (user) {
//                     // Check if the user is attempting to use an admin role
//                     if (role === "admin") {
//                         toast.error("Invalid admin credentials");
//                         return;
//                     }
    
//                     LogIn(user);
//                     toast.success("Login Successful");
//                     setTimeout(() => {
//                         navigate("/home");
//                     }, 2000);
//                 } else {
//                     toast.error("Invalid credentials");
//                 }
//             } else {
//                 toast.error("Invalid credentials");
//             }
//         } catch (error) {
//             toast.error("An error occurred. Please try again later.");
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
//                     <form>
//                         <label>Username</label>
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             onChange={onhandleUsername}
//                             autoComplete="off"
//                         />
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             onChange={onhandlePassword}
//                             autoComplete="new-password"
//                         />
//                         <div className="for-group">
//                             <label htmlFor="role">Role:</label>
//                             <select id="role" name="role" onChange={onhandleRole}>
//                                 <option value="user">User</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                         </div>
//                         <button onClick={onhandleSubmit}>Login</button>
//                         <p>
//                             Don't have an account? <span onClick={onhandleLogin}>Sign Up</span>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//             <div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Login;
// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/Login.css";
// // import { getData } from "../assets/JSON/API";
// import Navbar from "./Navbar";
// import "../assets/css/Navbar.css";
// import Footer from "./Footer";
// import { Context } from "./GlobeData";
// import ToasterFunc from "./ToasterFunc";
// import toast from "react-hot-toast";
// import Loginimage from "../assets/images/Loginimage.jpg";
// import axios from "axios";
// import { jwtDecode } from 'jwt-decode';

// export const Login = () => {
//     const { LogIn, setLoggedIn } = useContext(Context);
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("user");
//     const [data, setData] = useState([]);

    

//     const navigate = useNavigate();

//     const onhandleUsername = (e) => {
//         setUsername(e.target.value);
//     };

//     const onhandlePassword = (e) => {
//         setPassword(e.target.value);
//     };

//     const onhandleRole = (e) => {
//         setRole(e.target.value);
//     };

//     const onhandleLogin = (e) => {
//         navigate("/Signup");
        
//     };

//     const onhandleSubmit = async (e) => {
//         e.preventDefault();

//         if (username === "") {
//             toast.error("Please enter Username");
//             return;
//         } else if (password === "") {
//             toast.error("Please enter Password");
//             return;
//         }

//         // try {
//         //     const response = await axios.post("http://localhost:8080/api/users/login", {
//         //         userName: username,
//         //         password: password
//         //         // userRole: role
//         //     });
//         //     const user = {
//         //         id: "701b",
//         //         username: "Krithika",
//         //         email: username,
//         //         password: password,
//         //         userRole: role
//         //     }

//         //     if(response.data === 1){
//         //         alert("User already Resgistered");
//         //         navigate("/Signup");
//         //     }
//         //     else if(response.data === 2){
//         //         LogIn(user);
//         //         alert("User logged in Successfully!");
//         //         navigate("/home")
//         //     }
//         //     else if(response.data === 3){
//         //         alert("Admin logged in Successfully!");
//         //         navigate("/adminUsers");
//         //     }
//         //     else{
//         //         alert("Invalid Crendentials");
//         //         setPassword('');
//         //     }

           
//         // } catch (error) {
//         //     toast.error("An error occurred. Please try again later.");
//         // }
//         try {
//             const response = await axios.post('http://localhost:8080/api/users/login', {
//                 userName: username,
//                 password:password,
//             });
//             if (response.status === 200) {
//                 const token = response.data;
//                 const decodedToken = jwtDecode(token);
                
//                 const role = decodedToken.Role;
                    


//                 if (role === 'admin') {
//                     // setRole('admin');
//                     navigate('/adminusers');
//                     alert('Admin Logged In Successfully');
//                 } else {
//                     // setRole('user');
//                     navigate('/home');
//                     alert('Logged In Successfully');
//                 }
                
//                 // setAuth(true);
//                 // setUser(email);
//             }
//         } catch (error) {
//             if (error.response) {
//                 if (error.response.status === 404) {
//                     alert('User not found!');
//                     // handleSignup();
//                 } else if (error.response.status === 401) {
//                     alert('Invalid Credentials.');
//                 } else {
//                     console.log('Error:', error.message);
//                 }
//             } else {
//                 console.log('Error:', error.message);
//             }
//         }
//     };
//     const onhandleAdminLogin = () => navigate('/admin-login');
//     const onhandleTrainerLogin=()=>navigate('/trainer-login');

//     return (
//         <div>
//             <Navbar />
//             <ToasterFunc />
//             <h1>Login</h1>
//             <div className="login-container">
//                 <img src={Loginimage} alt="Login Image" />
//                 <div className="Login">
//                     <form>
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             onChange={onhandleUsername}
//                             autoComplete="off"
//                         />
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             onChange={onhandlePassword}
//                             autoComplete="new-password"
//                         />
//                         {/* <div className="for-group">
//                             <label htmlFor="role">Role:</label>
//                             <select id="role" name="role" onChange={onhandleRole}>
//                                 <option value="user">User</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                         </div> */}
//                         <button onClick={onhandleSubmit}>Login</button>
//                         <p>
//                             Don't have an account? <span onClick={onhandleLogin}>Sign Up</span>
//                         </p>
//                         <p>Continue as <span onClick={onhandleAdminLogin}>Admin</span></p>
//                         <p>Continue as <span onClick={onhandleTrainerLogin}>Trainer</span></p>

//                     </form>
//                 </div>
//             </div>
//             <div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import Navbar from "./Navbar";
import "../assets/css/Navbar.css";
import Footer from "./Footer";
import { Context } from "./GlobeData";
import ToasterFunc from "./ToasterFunc";
import toast from "react-hot-toast";
import Loginimage from "../assets/images/Loginimage.jpg";
import axios from "axios";
import {jwtDecode} from "jwt-decode";  // Corrected import

export const Login = () => {
    const { LogIn, setLoggedIn } = useContext(Context);  // Using LogIn from context
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onhandleUsername = (e) => {
        setUsername(e.target.value);
    };

    const onhandlePassword = (e) => {
        setPassword(e.target.value);
    };

    const onhandleLogin = (e) => {
        navigate("/Signup");
    };

    const onhandleSubmit = async (e) => {
        e.preventDefault();

        if (username === "") {
            toast.error("Please enter Username");
            return;
        } else if (password === "") {
            toast.error("Please enter Password");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/login/all', {
                userName: username,
                password: password,
            });

            if (response.status === 200) {
                const token = response.data;
                const decodedToken = jwtDecode(token);
                const email = decodedToken.Email;
                localStorage.setItem("token", token);
                localStorage.setItem("role", decodedToken.Role);

                if (decodedToken.Role === 'Admin') {
                    LogIn(decodedToken);
                    navigate('/adminpage');
                    alert('Admin Logged In Successfully');
                } else if (decodedToken.Role === 'Trainer') {
                    LogIn(decodedToken);
                    try{
                        const trainerId = await axios.get(`http://localhost:8080/api/trainer/getId/${email}`)
                        console.log(trainerId.data);
                        localStorage.setItem("trainerId", trainerId.data);
                    }
                    catch(error){
                        console.error("Unable to find Trainer!!");
                    }
                    navigate('/trainer');
                    alert('Trainer Logged In Successfully');
                } else {
                    LogIn(decodedToken);
                    navigate('/home');
                    alert('Logged In Successfully');
                }
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert('User not found!');
                } else if (error.response.status === 401) {
                    alert('Invalid Credentials.');
                } else {
                    console.log('Error:', error.message);
                }
            } else {
                console.log('Error:', error.message);
            }
        }
    };

    return (
        <div>
            <Navbar />
            <ToasterFunc />
            <h1>Login</h1>
            <div className="login-container">
                <img src={Loginimage} alt="Login Image" />
                <div className="Login">
                    <form>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={onhandleUsername}
                            autoComplete="off"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={onhandlePassword}
                            autoComplete="new-password"
                        />
                        <button onClick={onhandleSubmit}>Login</button>
                        <p>
                            Don't have an account? <span onClick={onhandleLogin}>Sign Up</span>
                        </p>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Login;

