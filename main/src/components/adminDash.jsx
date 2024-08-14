
import React, { useEffect, useState } from 'react';
import { Users, BookOpen, FileText, DollarSign, BarChart2, Bell, Settings } from 'lucide-react';
// import UserManagement from './UserManagement';
import ClassManagement from './ClassManagement';
import ContentManagement from './ContentManagement';
// import PaymentManagement from './PaymentManagement';
// import ReportsAnalytics from './ReportsAnalytics';
import Notifications from './Notifications';
// import SystemSettings from './SystemSettings';
import '../assets/css/admindash.css'
import Admin from './PlanManagement';
import AdminUsers from './AdminUsers';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('user');
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || role !== "Admin") {
      navigate("/login");
    }
  }, [token, role, navigate]);
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/trainer/alltrainer`);
      setTrainers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'user':
        return <AdminUsers/>;
    //   case 'class':
    //     return <ClassManagement />;
      case 'content':
        return <ContentManagement />;
      case 'admin':
        return <Admin />;
    //   case 'payment':
    //     return <PaymentManagement />;
    //   case 'reports':
    //     return <ReportsAnalytics />;
    //   case 'notifications':
    //     return <Notifications />;
    //   case 'settings':
    //     return <SystemSettings />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <button onClick={() => setActiveTab('user')} className={activeTab === 'user' ? 'active' : ''}>
            <Users size={18} /> User Management
          </button>
          {/* <button onClick={() => setActiveTab('class')} className={activeTab === 'class' ? 'active' : ''}>
            <BookOpen size={18} /> Class Management
          </button> */}
          <button onClick={() => setActiveTab('content')} className={activeTab === 'content' ? 'active' : ''}>
            <FileText size={18} /> Content Management
          </button>
          <button onClick={() => setActiveTab('admin')} className={activeTab === 'admin' ? 'active' : ''}>
            <FileText size={18} /> Plan Management
          </button>
          {/* <button onClick={() => setActiveTab('payment')} className={activeTab === 'payment' ? 'active' : ''}>
            <DollarSign size={18} /> Payment Management
          </button>
          <button onClick={() => setActiveTab('reports')} className={activeTab === 'reports' ? 'active' : ''}>
            <BarChart2 size={18} /> Reports & Analytics
          </button> */}
          {/* <button onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>
            <Bell size={18} /> Notifications
          </button> */}
          {/* <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
            <Settings size={18} /> System Settings
          </button> */}
        </nav>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;