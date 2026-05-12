import React, { useContext } from 'react';
import { Navigate, Link, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import DashboardStats from '../components/DashboardStats';
import AdmissionsList from './AdmissionsList';
import StudentsList from './StudentsList';
import { 
  Bell, 
  Search, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon,
  ClipboardCheck,
  FileText,
  Wallet,
  BookOpen
} from 'lucide-react';

// Overview Component
const DashboardOverview = ({ user }) => {
  const modules = [
    { name: 'Attendance', icon: ClipboardCheck, color: 'bg-green-100 text-green-600', path: '/dashboard/attendance', desc: 'Track daily presence' },
    { name: 'Results', icon: FileText, color: 'bg-blue-100 text-blue-600', path: '/dashboard/results', desc: 'View exam scores' },
    { name: 'Fees', icon: Wallet, color: 'bg-purple-100 text-purple-600', path: '/dashboard/fees', desc: 'Manage payments' },
    { name: 'Schedule', icon: CalendarIcon, color: 'bg-yellow-100 text-yellow-600', path: '/dashboard/schedule', desc: 'Class timetable' },
  ];

  return (
    <>
      {/* Page Title & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back, {user.name}! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search records..." 
              className="bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-indigo-500 transition shadow-sm w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-200">
            <Plus size={14} />
            <span>{user.role === 'admin' ? 'Add User' : 'New Report'}</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <DashboardStats role={user.role} />

      {/* Modules Quick Access Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-900 text-lg">Modules Quick Access</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod) => (
            <Link key={mod.name} to={mod.path} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover-lift group">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${mod.color} group-hover:scale-110 transition-transform`}>
                  <mod.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{mod.name}</h3>
                  <p className="text-[10px] text-slate-400 mt-0.5">{mod.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
                <h2 className="font-bold text-slate-900">Recent Activity</h2>
              </div>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition">
                View All <ChevronRight size={14} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 ${i === 1 ? 'bg-green-100 text-green-600' : i === 2 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                      <Bell size={18} />
                    </div>
                    <div className="flex-1 pb-4 border-b border-slate-50 last:border-0">
                      <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition">
                        {user.role === 'admin' ? 'New student registration: Ahmed Khan' : user.role === 'teacher' ? 'Grade submitted for Physics - Class 10A' : 'Assignment submitted: Mathematics HW 4'}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">2 hours ago • {user.role === 'admin' ? 'Admission Dept' : 'Academics'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl font-bold border border-white/20">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-indigo-100 text-sm opacity-80 capitalize">{user.role} ID: #EP-2024</p>
              </div>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="bg-white/10 rounded-xl p-3 flex justify-between items-center border border-white/5">
                <span className="text-sm opacity-80">Profile Status</span>
                <span className="text-xs font-bold bg-green-400 text-indigo-900 px-2 py-0.5 rounded-full shadow-sm">Active</span>
              </div>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition shadow-sm">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Generic Module Placeholder
const ModulePlaceholder = ({ title }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
    <div className="mx-auto w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
      <BookOpen size={48} className="text-slate-300" />
    </div>
    <h2 className="text-2xl font-bold text-slate-900 mb-2">{title} Module</h2>
    <p className="text-slate-500 max-w-md mx-auto mb-8">This module is currently being optimized for your role. You will soon be able to manage and view all {title.toLowerCase()} records here.</p>
    <Link to="/dashboard" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-100">
      Back to Overview
    </Link>
  </div>
);

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
  
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 overflow-hidden">
      <Sidebar role={user.role} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<DashboardOverview user={user} />} />
              <Route path="/admissions" element={<AdmissionsList />} />
              <Route path="/attendance" element={<ModulePlaceholder title="Attendance" />} />
              <Route path="/results" element={<ModulePlaceholder title="Results" />} />
              <Route path="/fees" element={<ModulePlaceholder title="Fees & Finance" />} />
              <Route path="/schedule" element={<ModulePlaceholder title="Schedule" />} />
              <Route path="/students" element={<StudentsList />} />
              <Route path="/teachers" element={<ModulePlaceholder title="Teachers Management" />} />
              <Route path="/classes" element={<ModulePlaceholder title="Classes" />} />
              <Route path="/settings" element={<ModulePlaceholder title="Settings" />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
