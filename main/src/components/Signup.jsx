// import React, { useState,useEffect, useContext } from 'react';
// import { postData,getData } from '../assets/JSON/API';
// import '../assets/css/Signup.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import ToasterFunc from './ToasterFunc';
// import toast from 'react-hot-toast';
// import { Context } from './GlobeData';
// // import Loginimage from '../assets/images/Loginimage.jpg';
// import signupimg from '../assets/images/signupimg.jpg';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {

//     const {LogIn} = useContext(Context);
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const userRole = "User";
//     const [data,setData]=useState([]);

//     // useEffect(() => {

//     //     const fetch = async() => {
//     //         try{
//     //             const res=await axios.get('http://localhost:3000/UserData');
//     //             setData(res.data);
//     //         }
//     //         catch(error)
//     //         {
//     //             console.error("Error fetching data");
//     //         }
//     //     }
//     //     fetch();
//     // },[]);

//     const onhandleLogin = () => {
//         navigate('/login');
//     }

//     const onhandleEmail = (e) => {
//         setEmail(e.target.value);
//     }

//     const onhandlePassword = (e) => {
//         setPassword(e.target.value);
//     }

//     const onhandleUsername = (e) => {
//         setUsername(e.target.value);
//     }

//     const onhandleSubmit = async(e) => {
//         e.preventDefault();
//         if(username==="")
//         {
//             toast.error('Username is required');
//             return;
//         }
//         else if(email==="")
//         {
//             toast.error('Email is required');
//             return;
//         }
//         else if(password==="")
//         {
//             toast.error('Password is required');
//             return;
//         }

//         try {
//             const val = {
//                 email : username,
//                 password : password,
//                 userRole : 'user',
//             }
//             console.log(val);
//             const response = await axios.get(`http://localhost:8080/api/users/check/${username}`);
//             if(response.data === 1){
//                 alert("User already Resgistered");
//             }
//             else{
//                 try{
//                     await axios.post('http://localhost:8080/api/users/registerUser', {
//                         username : username, 
//                         email : email, 
//                         password : password,
//                         userRole : userRole 
//                     });
//                     // LogIn({username,email,password,userRole});
//                     toast.success("Signup successful");
//                     setTimeout(() =>{
//                         navigate('/home')
//                     },2000);
//                     }
//                 catch(error)
//                 {
//                     console.error("Error posting data",error);
//                     toast.error("Error signing up");
//                 }
//             }
            
//         }
//         catch (error) {
//             toast.error("An error occurred. Please try again later.");
//         }



//         const uindex =  data ? data.findIndex(({uname})=>uname === username):-1;
//         if(uindex !== -1)
//         {
//             toast.error("Username already taken");
//             return;
//         }
//         else
//         {
//             const emails = data.map(item => item.email);
//             if(emails.includes(email))
//             {
//                 toast.error("Email already exists");
//                 return;
//             }
//             else
//             {
                
//                 return;
//             }
//         }
//     };
//     const onhandleAdminSignup = () => navigate('/admin-signup');

//     return (
//         <div>
//             <Navbar />
//             <ToasterFunc />
//             <div className="signup-container">
//                 <img src={signupimg} alt="Signup Illustration" />
//                 <div className="Signup">
//                     <h1>Sign Up</h1>
//                     <form>
//                         <label>
//                             Username:
//                             <input type="text" name="text" onChange={onhandleUsername} placeholder='Enter Any Username' />
//                         </label>
//                         <label>
//                             Email:
//                             <input type="email" name="email" onChange={onhandleEmail} placeholder='Enter your email' />
//                         </label>
//                         <label>
//                             Password:
//                             <input type="password" name="password" onChange={onhandlePassword} placeholder='Enter Any Password' />
//                         </label>
//                         <input type="submit" onClick={onhandleSubmit} value="Sign Up" />
//                         <p>Already have an account? <span onClick={onhandleLogin}>Login</span></p>
//                         <p>Continue as <span onClick={onhandleAdminSignup}>Admin</span></p>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Signup;

// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { Context } from './GlobeData';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import ToasterFunc from './ToasterFunc';
// import signupimg from '../assets/images/signupimg.jpg';
// import '../assets/css/Signup.css';

// const Signup = () => {
//     const { LogIn } = useContext(Context);
//     const navigate = useNavigate();
//     const [userName, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const userRole = "User";

//     const onhandleLogin = () => {
//         navigate('/login');
//     }

//     const onhandleEmail = (e) => {
//         setEmail(e.target.value);
//     }

//     const onhandlePassword = (e) => {
//         setPassword(e.target.value);
//     }

//     const onhandleUsername = (e) => {
//         setUsername(e.target.value);
//     }

//     const onhandleSubmit = async (e) => {
//         e.preventDefault();

//         if (userName === "") {
//             toast.error('Username is required');
//             return;
//         }
//         if (email === "") {
//             toast.error('Email is required');
//             return;
//         }
//         if (password === "") {
//             toast.error('Password is required');
//             return;
//         }

//         try {
//             const checkResponse = await axios.get(`http://localhost:8080/api/users/check/${userName}`);
//             if (checkResponse.data === 1) {
//                 toast.error("User already registered");
//                 return;
//             }

//             const registerResponse = await axios.post('http://localhost:8080/api/users/registerUser', {
//                 userName,
//                 email,
//                 password,
//                 userRole
//             });

//             toast.success("Signup successful");
//             setTimeout(() => {
//                 navigate('/login');//changed here 
//             }, 2000);
//         } catch (error) {
//             console.error("Error during signup", error);
//             toast.error("Error signing up");
//         }
//     };

//     const onhandleAdminSignup = () => navigate('/admin-signup');
    

//     return (
//         <div>
//             <Navbar />
//             <ToasterFunc />
//             <div className="signup-container">
//                 <img src={signupimg} alt="Signup Illustration" />
//                 <div className="Signup">
//                     <h1>Sign Up</h1>
//                     <form onSubmit={onhandleSubmit}>
//                         <label>
//                             Username:
//                             <input type="text" name="username" onChange={onhandleUsername} placeholder='Enter Any Username' />
//                         </label>
//                         <label>
//                             Email:
//                             <input type="email" name="email" onChange={onhandleEmail} placeholder='Enter your email' />
//                         </label>
//                         <label>
//                             Password:
//                             <input type="password" name="password" onChange={onhandlePassword} placeholder='Enter Any Password' />
//                         </label>
//                         <input type="submit" value="Sign Up" />
//                         <p>Already have an account? <span onClick={onhandleLogin}>Login</span></p>
//                         <p>Continue as <span onClick={onhandleAdminSignup}>Admin</span></p>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Signup;
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Context } from './GlobeData';
import Navbar from './Navbar';
import Footer from './Footer';
import ToasterFunc from './ToasterFunc';
import signupimg from '../assets/images/signupimg.jpg';
import '../assets/css/Signup.css';

const Signup = () => {
    const { LogIn } = useContext(Context);
    const navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userRole = "User";

    const onhandleLogin = () => {
        navigate('/login');
    }

    const onhandleEmail = (e) => {
        setEmail(e.target.value);
    }

    const onhandlePassword = (e) => {
        setPassword(e.target.value);
    }

    const onhandleUsername = (e) => {
        setUsername(e.target.value);
    }

    const onhandleSubmit = async (e) => {
        e.preventDefault();

        if (userName === "") {
            toast.error('Username is required');
            return;
        }
        if (email === "") {
            toast.error('Email is required');
            return;
        }
        if (password === "") {
            toast.error('Password is required');
            return;
        }

        try {
            const checkResponse = await axios.get(`http://localhost:8080/api/users/check/${userName}`);
            if (checkResponse.data === 1) {
                toast.error("User already registered");
                return;
            }

            const registerResponse = await axios.post('http://localhost:8080/api/login/allsignup', {
                username:userName,
                email:email,
                pass:password,
                role:userRole
            });

            toast.success("Signup successful");
            setTimeout(() => {
                navigate('/login');//changed here 
            }, 2000);
        } catch (error) {
            console.error("Error during signup", error);
            toast.error("Error signing up");
        }
    };

    const onhandleAdminSignup = () => navigate('/admin-signup');
    

    return (
        <div>
            <Navbar />
            <ToasterFunc />
            <div className="signup-container">
                <img src={signupimg} alt="Signup Illustration" />
                <div className="Signup">
                    <h1>Sign Up</h1>
                    <form onSubmit={onhandleSubmit}>
                        <label>
                            Username:
                            <input type="text" name="username" onChange={onhandleUsername} placeholder='Enter Any Username' />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" onChange={onhandleEmail} placeholder='Enter your email' />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" onChange={onhandlePassword} placeholder='Enter Any Password' />
                        </label>
                        <input type="submit" value="Sign Up" />
                        <p>Already have an account? <span onClick={onhandleLogin}>Login</span></p>
                        {/* <p>Continue as <span onClick={onhandleAdminSignup}>Admin</span></p> */}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;