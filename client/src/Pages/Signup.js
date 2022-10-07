import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { create, reset } from "../redux/features/user/usersSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userSchema } from "../validators/Validations";
import { yupResolver } from "@hookform/resolvers/yup";

import Spinner from "../components/Spinner";

function Signup() {
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
  const { createUser } = UserAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(userSchema),
  });

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      navigate("/signup-2");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const submit = async (event) => {
    event.preventDefault();

    const data = {
      first_name: event.target[0].value,
      last_name: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      confirmPassword: event.target[4].value,
    };

    if (data.password != data.confirmPassword) {
      return setShowError("Passwords do not match");
    }
    const userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
    };

    const isValid = await userSchema.isValid(data);
    console.log(isValid);
    if (isValid) {
      try {
        setShowError("");
        setLoading(true);
        // const user = await createUser(data.email, data.password);

        // add to userSlice
        dispatch(create(userData));
      } catch (error) {
        setShowError(
          "Error creating account. Email may not exist or is not valid."
        );
        console.log(error.message);
      }
      setLoading(false);
    } else {
      setShowError("Please input correct information.");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={submit}>
        <div className="flex flex-col justify-center bg-container min-w-0  rounded-xl py-8 px-14 font-Manrope">
          <div className="text-custwhite text-3xl font-light">Signup</div>

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
                {...register("first_name")}
              />
              <input
                className="bg-custwhite text-black w-full rounded h-10 px-4"
                type="text"
                placeholder="Last Name"
                {...register("last_name")}
              />
            </div>
            <input
              className="bg-custwhite text-black w-full rounded h-10 px-4 mb-4"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                className="bg-custwhite text-black w-full rounded h-10 px-4 mr-4"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <input
                className="bg-custwhite text-black w-full rounded h-10 px-4"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              placeholder="Signup"
              className="bg-lightblack text-custwhite text-sm font-light px-16 py-3 rounded-xl hover:cursor-pointer"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
