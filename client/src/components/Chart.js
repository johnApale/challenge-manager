import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Chart() {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError("Failed to logout");
    }
  };
  return (
    <div className=" font-Manrope flex flex-col h-80">
      <div className="flex justify-center bg-container rounded-3xl h-80">
        <div className="flex items-center text-custwhite font-bold text-3xl">
          Hi, {user && user.email}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleLogout}
            className="flex ml-2 px-5 py-1 rounded-2xl font-light bg-black text-custwhite"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
