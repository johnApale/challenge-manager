import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, signIn } = UserAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("TEST");
    try {
      setShowError("");
      setLoading(true);
      const user = await signIn(email, password);
      console.log(user);

      // add user to mongoDB

      // navigate to signup-2 page
      navigate("/");
    } catch (error) {
      setShowError("Failed to sign in.");
      console.log(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      {user ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col justify-center bg-container max-w-xl w-2/5 rounded-xl py-8 px-14 font-Manrope">
          {/* Center Container */}
          <div className="text-custwhite text-3xl">Login</div>
          {showError && (
            <span className="flex justify-center text-sm mt-5  text-red-900 rounded py-2 bg-red-300">
              {showError}
            </span>
          )}
          <div className="w-full border-y-2 border-black my-5 py-5">
            <h3 className="text-custgrey mb-2">Email</h3>
            <input
              className="bg-custwhite w-full rounded h-10 px-4 mb-6"
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <h3 className="text-custgrey mb-2">Password</h3>
            <input
              className="bg-custwhite w-full rounded h-10 px-4"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="bg-lightblack text-custwhite px-10 py-1 rounded-xl"
            >
              Login
            </button>
          </div>
          <div className="flex flex-col mt-5 text-xs">
            <div className="flex justify-center">
              <p className="text-custgrey mr-1">Forgot Password?</p>
              <Link to="/" className="text-custwhite underline">
                Click Here
              </Link>
            </div>
            <div className="flex justify-center mt-1">
              <p className="text-custgrey mr-1">Don't Have An Account?</p>
              <Link to="/signup" className="text-custwhite underline">
                Signup Here
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
