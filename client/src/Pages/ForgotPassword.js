import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPassword } = UserAuth();

  const handleSubmit = async () => {
    try {
      setMessage("");
      setShowError("");
      setLoading(true);
      const user = await resetPassword(email);
      console.log(user);
      setMessage("Check your inbox for further instructions.");
    } catch (error) {
      setShowError("Email address not found.");
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center bg-container max-w-xl w-2/5 rounded-xl py-8 px-14 font-Manrope">
        {/* Center Container */}
        <div className="text-custwhite text-3xl">Reset Password</div>
        {showError && (
          <span className="flex justify-center text-sm mt-5  text-red-900 rounded py-2 bg-red-300">
            {showError}
          </span>
        )}
        {message && (
          <span className="flex justify-center text-sm mt-5  text-green-900 rounded py-2 bg-green-200">
            {message}
          </span>
        )}
        <div className="w-full border-y-2 border-black my-5 py-5">
          <h3 className="text-custgrey mb-2">Email</h3>
          <input
            className="bg-custwhite w-full rounded h-10 px-4 mb-2"
            type="email"
            placeholder="Email address"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="bg-custwhite text-lightblack px-10 py-1 rounded-xl"
          >
            Reset
          </button>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="bg-lightblack text-custwhite font-bold px-10 py-1 rounded-xl"
          >
            Login
          </button>
        </div>
        <div className="flex flex-col mt-5 text-xs">
          <div className="flex justify-center">
            <p className="text-custgrey mr-1">Don't Have An Account?</p>
            <Link to="/signup" className="text-custwhite underline">
              Signup Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
