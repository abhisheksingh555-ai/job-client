import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-900 to-purple-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg transition">
          Register
        </button>

        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-300 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}