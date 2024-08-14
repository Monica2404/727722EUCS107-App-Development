import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
// import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Plans from "./components/Plans.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AdminUsers from "./components/AdminUsers.jsx";
import Admissions from "./components/Admissions.jsx";
import Profile from "./components/Profile.jsx";
import Buy from "./components/Buy.jsx";
import Videos from "./components/Videos.jsx";
// import AdminSignup from "./components/AdminSignup.jsx";
import TrainerProfile from "./components/trainer/TrainerProfile.jsx";
import TrainerDashboard from "./components/trainer/TrainerDashboard.jsx";
import TrainerClasses from "./components/trainer/TrainerClass.jsx";
import TrainerStudents from "./components/trainer/TrainerStudent.jsx";
import TrainerContent from "./components/trainer/TrainerContent.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import TrainerLogin from "./components/TrainerLogin.jsx";
import TrainerChat from "./components/trainer/TrainerChat.jsx";
import UserChat from "./components/UserChat.jsx";
import AdminDashboard from "./components/adminDash.jsx";
import PlanDetails from "./components/PlanDetails.jsx";
import Payment from "./components/Payment.jsx";

function App() {
  const [trainerId, setTrainerId] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path ="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/adminusers" element={<AdminUsers />}></Route>
        <Route path="/buy/:id" element={<Buy/>}></Route>
        <Route path="/admissions" element={<Admissions />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route path="/user-chat" element={<UserChat />} />
        <Route path="/adminpage" element={<AdminDashboard />} />
        <Route path="/details/:id" element={<PlanDetails />} />
        <Route path="/payment/:id" element={<Payment />} />


    

       {/* trainer routes */}
        <Route path="/trainer" element={<TrainerDashboard trainerId={trainerId}/>} />
        <Route path="/trainer/profile" element={<TrainerProfile />} />
        <Route path="/trainer/classes" element={<TrainerClasses />} />
        <Route path="/trainer/students" element={<TrainerStudents />} />
        <Route path="/trainer/content" element={<TrainerContent />} />
        <Route path="/trainer/chat" element={<TrainerChat />} />
      </Routes>
    </div>
  );
}

export default App;
