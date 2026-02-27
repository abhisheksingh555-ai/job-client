import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  Briefcase, 
  BarChart3, 
  FileText, 
  Video, 
  Bell, 
  UserCircle 
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Replace this with your actual Redux state (e.g., const { user } = useSelector(state => state.auth))
  const isLoggedIn = false; 

  const navLinks = [
    { name: "Find Jobs", path: "/jobs", icon: <Briefcase size={18} /> },
    { name: "Gap Analysis", path: "/analysis", icon: <BarChart3 size={18} /> },
    { name: "Resume Builder", path: "/resume", icon: <FileText size={18} /> },
    { name: "AI Interview", path: "/interview", icon: <Video size={18} /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600">
                TalentFlow
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Action Buttons / Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-5">
                <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <Bell size={22} />
                </button>
                <Link to="/profile" className="flex items-center space-x-2 bg-gray-50 p-1 pr-3 rounded-full hover:bg-gray-100 transition-all">
                  <UserCircle className="text-indigo-600" size={30} />
                  <span className="text-sm font-semibold text-gray-700">My Dashboard</span>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-indigo-600 font-medium px-4 py-2">
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 text-gray-700 hover:bg-indigo-50 p-3 rounded-xl transition-colors"
            >
              <span className="text-indigo-600">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
          <hr className="border-gray-100" />
          <div className="flex flex-col space-y-3">
            <Link to="/login" className="text-center py-3 text-gray-600 font-medium">Login</Link>
            <Link to="/register" className="text-center py-3 bg-indigo-600 text-white rounded-xl font-bold">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;