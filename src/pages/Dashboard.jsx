import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user?.name || user?.email}
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}