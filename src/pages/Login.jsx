import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn, ChevronRight } from "lucide-react";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Visual/Branding (Matches Register) */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Welcome Back.
          </h1>
          <p className="text-lg text-indigo-100 mb-8">
            Login to access your personalized dashboard, track applications, and stay connected with the professional community.
          </p>
          <div className="p-6 bg-indigo-500/30 rounded-2xl border border-indigo-400/30 backdrop-blur-sm">
            <p className="italic text-indigo-50">"This platform changed how I look for jobs. The interface is seamless and the recruiters are top-tier."</p>
            <p className="mt-4 font-semibold">— Sarah Jenkins, Senior Developer</p>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Login</h2>
            <p className="text-gray-500 mt-2">Welcome back! Please enter your details.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <div className="flex justify-between items-end mb-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Password</label>
                <Link to="/forgot-password" size="sm" className="text-xs font-bold text-indigo-600 hover:text-indigo-500">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-70"
            >
              <span>{loading ? "Signing in..." : "Login"}</span>
              {!loading && <LogIn size={18} />}
            </button>

            {/* Divider */}
            <div className="relative flex py-5 items-center">
                <div className="grow border-t border-gray-200"></div>
                <span className="shrink mx-4 text-gray-400 text-sm">Or continue with</span>
                <div className="grow border-t border-gray-200"></div>
            </div>

            {/* Social Login (Example) */}
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
              <span>Google</span>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 font-bold hover:underline underline-offset-4">
              Sign Up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;