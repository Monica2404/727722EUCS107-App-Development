import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { getData } from "../assets/JSON/API";
import Navbar from "./Navbar";
import "../assets/css/Navbar.css";
import Footer from "./Footer";
import { Context } from "./GlobeData";
import ToasterFunc from "./ToasterFunc";
import toast from "react-hot-toast";
import Loginimage from "../assets/images/Loginimage.jpg";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

export const TrainerLogin = () => {
    const { LogIn, setLoggedIn } = useContext(Context);
    const[email,setemail]=useState("");
    const [tPass, settPass] = useState("");
    const [data, setData] = useState([]);

    

    const navigate = useNavigate();

    const onhandletrainerEmail = (e) => {
        setemail(e.target.value);
    };

    const onhandlePassword = (e) => {
        settPass(e.target.value);
    };


    const onhandleLogin = (e) => {
        navigate("/trainer");
        
    };

    const onhandleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Please enter email");
            return;
        } else if (tPass === "") {
            toast.error("Please enter Password");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/trainer/validate', {
                email: email,
                tPass:tPass,
            });
            if (response.status === 200) {
                const token = response.data;
                const decodedToken = jwtDecode(token);
                
                const role = decodedToken.Role;
                    


                if (role === 'trainer') {
                    // setRole('admin');
                    navigate('/trainer');
                    alert('Trainer Logged In Successfully');
                } else {
                    // setRole('user');
                    navigate('/plans');
                    alert('Logged In Successfully');
                }
                
                //setAuth(true);
                // setUser(email);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert('Trainer not found!');
                    // handleSignup();
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
                            placeholder="email"
                            onChange={onhandletrainerEmail}
                            autoComplete="off"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={onhandlePassword}
                            autoComplete="new-password"
                        />
                        {/* <div className="for-group">
                            <label htmlFor="role">Role:</label>
                            <select id="role" name="role" onChange={onhandleRole}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div> */}
                        <button onClick={onhandleSubmit}>Login</button>
                        {/* <p>
                            Don't have an account? <span onClick={onhandleLogin}>Sign Up</span>
                        </p> */}
                        {/* <p>Continue as <span onClick={onhandleAdminSignup}>Admin</span></p> */}
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default TrainerLogin;