import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare, 
  BookOpen, 
  Calendar, 
  FileText, 
  CreditCard, 
  Settings,
  Bell,
  MessageSquare,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
  Wallet
} from 'lucide-react';

const Sidebar = ({ role }) => {
  const location = useLocation();
  
  const mainLinks = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  ];

  const adminModules = [
    { name: 'Admissions', path: '/dashboard/admissions', icon: ClipboardCheck },
    { name: 'Students', path: '/dashboard/students', icon: Users },
    { name: 'Teachers', path: '/dashboard/teachers', icon: UserSquare },
    { name: 'Classes', path: '/dashboard/classes', icon: BookOpen },
    { name: 'Finance', path: '/dashboard/fees', icon: CreditCard },
  ];

  const teacherModules = [
    { name: 'My Classes', path: '/dashboard/my-classes', icon: BookOpen },
    { name: 'Attendance', path: '/dashboard/attendance', icon: ClipboardCheck },
    { name: 'Grades', path: '/dashboard/grades', icon: FileText },
    { name: 'Reports', path: '/dashboard/reports', icon: BarChart3 },
  ];

  const studentModules = [
    { name: 'Schedule', path: '/dashboard/schedule', icon: Calendar },
    { name: 'Attendance', path: '/dashboard/attendance', icon: ClipboardCheck },
    { name: 'Results', path: '/dashboard/results', icon: FileText },
    { name: 'Fees', path: '/dashboard/fees', icon: Wallet },
  ];

  const modules = role === 'admin' ? adminModules : role === 'teacher' ? teacherModules : studentModules;

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
      <div className="p-6">
        <div className="mb-8 px-2">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Main
          </h2>
          <nav className="space-y-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 group ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                      : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-2">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Modules
          </h2>
          <nav className="space-y-1">
            {modules.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600 pl-3' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-600'} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100">
        <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap size={16} className="text-indigo-600" />
            <p className="text-xs font-bold text-indigo-900">EduPortal Pro</p>
          </div>
          <p className="text-[10px] text-indigo-600 leading-relaxed mb-3">You are using the official school management portal.</p>
          <button className="w-full py-2 bg-indigo-600 rounded-lg text-[10px] font-bold text-white hover:bg-indigo-700 transition">
            View Updates
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
