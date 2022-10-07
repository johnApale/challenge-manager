import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { create, reset } from "../redux/features/user/usersSlice";
import { getByID } from "../redux/features/challenge/challengesSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function JoinByID() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(true);
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.user
  );

  const { challenge } = useSelector((state) => state.challenge);

  useEffect(() => {
    dispatch(getByID(param.id));
    setLoading(false);
    if (challenge.isError) {
      console.log(message);
    }
    if (challenge.isSuccess) {
      console.log("TRUE");
    }
    dispatch(reset());
  }, [loading]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  async function registerAccount(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setShowError("Password does not match.");
    }

    const userData = {
      first_name: fname,
      last_name: lname,
      email_address: email,
      challengeId: challenge._id,
    };

    try {
      setShowError("");
      setLoading(true);
      const user = await createUser(email, password);
      console.log(user);

      // add to userSlice
      console.log(userData);
      dispatch(create(userData));
    } catch (error) {
      setShowError("Email already exists. Try logging in.");
      console.log(error.message);
    }
    setLoading(false);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center bg-container min-w-0  rounded-xl py-8 px-14 font-Manrope">
        {/* Center Container */}
        <div className="text-custwhite text-3xl font-light">
          Join {challenge.name}!
        </div>
        {showError && (
          <span className="flex justify-center text-sm mt-5 text-red-900 rounded py-2 bg-red-300">
            {showError}
          </span>
        )}
        <div className="w-full border-y-2 border-black my-5 py-5 text-sm">
          <div className="grid grid-cols-2 gap-4 mb-7">
            <input
              className="bg-custwhite w-full rounded h-10 px-4"
              type="text"
              placeholder="First Name"
              onChange={(event) => {
                setFname(event.target.value);
              }}
            />
            <input
              className="bg-custwhite text-black w-full rounded h-10 px-4"
              type="text"
              placeholder="Last Name"
              onChange={(event) => {
                setLname(event.target.value);
              }}
            />
          </div>
          <input
            className="bg-custwhite text-black w-full rounded h-10 px-4 mb-4"
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-custwhite text-black w-full rounded h-10 px-4 mr-4"
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              className="bg-custwhite text-black w-full rounded h-10 px-4"
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  registerAccount(e);
                }
              }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-lightblack text-custwhite text-sm font-light px-16 py-3 rounded-xl"
            onClick={registerAccount}
            disabled={loading}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinByID;
