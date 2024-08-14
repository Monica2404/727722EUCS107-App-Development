// import React, { useState, useEffect } from 'react';
// import '../../assets/css/trainer.css';
// import TrainerProfile from './TrainerProfile';
// import axios from 'axios';
// import TrainerContent from './TrainerContent';
// import TrainerClasses from './TrainerClass';
// import TrainerStudents from './TrainerStudent';

// function TrainerDashboard() {
//   const [activeTab, setActiveTab] = useState('summary');
//   const [summaryData, setSummaryData] = useState({
//     totalClasses: 0,
//     totalStudents: 0,
//     upcomingClasses: 0,
//     totalVideos: 0
//   });
//   const [classes, setClasses] = useState([]);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetchSummaryData();
//     fetchClasses();
//     fetchVideos();
//   }, []);

//   const fetchSummaryData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/summary');
//       setSummaryData(response.data);
//     } catch (error) {
//       console.error('Error fetching summary data:', error);
//     }
//   };

//   const fetchClasses = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/trainerclass/getTC');
//       setClasses(response.data);
//     } catch (error) {
//       console.error('Error fetching classes:', error);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/videolinks/getvideos');
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const addClass = async (newClass) => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/trainerclass/addClass', newClass);
//       setClasses([...classes, response.data]);
//     } catch (error) {
//       console.error('Error adding class:', error);
//     }
//   };

//   const addVideo = async (newVideo) => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/videolinks/addvideo', newVideo);
//       setVideos([...videos, response.data]);
//     } catch (error) {
//       console.error('Error adding video:', error);
//     }
//   };


//   const renderContent = () => {
//     switch(activeTab) {
//       case 'profile':
//         return <TrainerProfile />;
//       case 'classes':
//         return <TrainerClasses classes={classes} addClass={addClass} />;
//       case 'students':
//         return <TrainerStudents />;
//       case 'content':
//         return <TrainerContent videos={videos} addVideo={addVideo} />;
//       default:
//         return (
//           <div className="dashboard-summary">
//             <h2>Summary</h2>
//             <p>Total Classes: {summaryData.totalClasses}</p>
//             <p>Total Students: {summaryData.totalStudents}</p>
//             <p>Upcoming Classes: {summaryData.upcomingClasses}</p>
//             <p>Total Videos: {summaryData.totalVideos}</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="trainer-dashboard">
//       <h1>Trainer Dashboard</h1>
//       <div className="dashboard-layout">
//         <nav className="sidebar">
//           <ul>
//             <li onClick={() => setActiveTab('summary')}>Summary</li>
//             <li onClick={() => setActiveTab('profile')}>Profile</li>
//             <li onClick={() => setActiveTab('classes')}>Classes</li>
//             <li onClick={() => setActiveTab('students')}>Students</li>
//             <li onClick={() => setActiveTab('content')}>Content</li>
//           </ul>
//         </nav>
//         <main className="content-area">
//           {renderContent()}
//         </main>
//       </div>
//     </div>+
//   );
// }

// export default TrainerDashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/trainer.css';
import TrainerProfile from './TrainerProfile';
import TrainerContent from './TrainerContent';
import TrainerClasses from './TrainerClass';
import TrainerStudents from './TrainerStudent';
import TrainerChat from './TrainerChat';
import { useNavigate } from 'react-router-dom';

function TrainerDashboard() {
  const [activeTab, setActiveTab] = useState('summary');
  const [summaryData, setSummaryData] = useState({
    totalClasses: 0,
    totalStudents: 0,
    upcomingClasses: 0,
    totalVideos: 0
  });
  const [classes, setClasses] = useState([]);
  const [videos, setVideos] = useState([]);
  const trainerId = localStorage.getItem("trainerId");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || role !== "Trainer") {
      navigate("/login");
    }
  }, [token, role, navigate]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [summaryResponse, classesResponse, videosResponse] = await Promise.all([
        axios.get('http://localhost:8080/api/summary'),
        axios.get(`http://localhost:8080/api/trainerclass/getTC/${trainerId}`),
        axios.get(`http://localhost:8080/api/videolinks/getvideos/${trainerId}`)
      ]);
      console.log(summaryResponse);
      console.log(classesResponse);
      console.log(videosResponse);
      setSummaryData(summaryResponse.data);
      setClasses(classesResponse.data);
      setVideos(videosResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addClass = async (newClass) => {
    try {
      const response = await axios.post('http://localhost:8080/api/trainerclass/addClass', newClass);
      setClasses(prevClasses => [...prevClasses, response.data]);
      fetchAllData();
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  const addVideo = async (newVideo) => {
    try {
      const response = await axios.post('http://localhost:8080/api/videolinks/addvideo', newVideo);
      setVideos(prevVideos => [...prevVideos, response.data]);
      // Update summary after adding a video
      fetchAllData();
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return <TrainerProfile />;
      case 'classes':
        return <TrainerClasses classes={classes} addClass={addClass} />;
      case 'students':
        return <TrainerStudents />;
      case 'content':
        return <TrainerContent videos={videos} addVideo={addVideo} />;
      case 'chat':
        return <TrainerChat />;
      default:
        return (
          <div className="dashboard-summary">
            <h2>Summary</h2>
            <p>Total Classes: {summaryData.totalClasses}</p>
            <p>Total Students: {summaryData.totalStudents}</p>
            <p>Upcoming Classes: {summaryData.upcomingClasses}</p>
            <p>Total Videos: {summaryData.totalVideos}</p>
          </div>
        );
    }
  };

  return (
    <div className="trainer-dashboard">
      <h1>Trainer Dashboard</h1>
      <div className="dashboard-layout">
        <nav className="sidebar">
          <ul>
            <li onClick={() => setActiveTab('summary')}>Summary</li>
            <li onClick={() => setActiveTab('profile')}>Profile</li>
            <li onClick={() => setActiveTab('classes')}>Classes</li>
            <li onClick={() => setActiveTab('students')}>Students</li>
            <li onClick={() => setActiveTab('content')}>Content</li>
            <li onClick={() => setActiveTab('chat')}>Chat</li>
          </ul>
        </nav>
        <main className="content-area">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default TrainerDashboard;