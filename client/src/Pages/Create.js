import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { create, reset } from "../redux/features/challenge/challengesSlice";
import { patch } from "../redux/features/user/usersSlice";
import Spinner from "../components/Spinner";

function Create() {
  const [confirmBool, setConfirmBool] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    start: "",
    end: "",
    buyIn: 0,
  });

  const { name, start, end, buyIn } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { challenge, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.challenge
  );

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [challenge, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const challengeData = {
      name,
      start,
      end,
      contestants: user._id,
      buyIn,
      admin: {
        _id: user._id,
        email: user.email_address,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    };
    console.log(challengeData);
    dispatch(create(challengeData));
    console.log(challenge);
    dispatch(patch(user._id, { challengeId: challenge._id }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center bg-container min-w-0  rounded-xl py-8 px-14 font-Manrope">
        {/* Center Container */}
        <div className="text-custwhite text-3xl font-light">
          Create Challenge
        </div>
        <div className="w-full border-y-2 border-black my-5 py-5 text-sm">
          <input
            className="bg-custwhite text-black w-full rounded h-10 px-4 mb-4"
            type="text"
            placeholder="Challenge Name"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <div className="grid grid-cols-2 gap-4 mt-4 mb-1">
            <div className="text-custwhite font-light">Start Date</div>
            <div className="text-custwhite font-light">End Date</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-custwhite rounded h-10 px-4"
              type="date"
              id="start"
              name="start"
              value={start}
              onChange={onChange}
            />
            <input
              className="bg-custwhite rounded h-10 px-4"
              type="date"
              id="end"
              name="end"
              value={end}
              onChange={onChange}
            />
          </div>
          <div className="flex items-center flex-row mt-4">
            <div className="text-custwhite ">Buy-in</div>
            <input
              type="number"
              className="ml-4 rounded h-10 w-16 pl-4 pr-2 bg-custwhite"
              id="buyIn"
              name="buyIn"
              value={buyIn}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-lightblack text-custwhite text-sm font-light px-16 py-3 rounded-xl">
            Go Back
          </button>
          <button
            onClick={onSubmit}
            className="bg-lightblack text-custwhite text-sm font-light px-16 py-3 rounded-xl"
          >
            Create
          </button>
        </div>
        {confirmBool && (
          <span className="flex justify-center text-sm mt-5 text-red-700 font-semibold">
            Password does not match.
          </span>
        )}
      </div>
    </div>
  );
}

export default Create;
