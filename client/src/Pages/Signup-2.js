import React from "react";
import { useNavigate } from "react-router-dom";

function Signup2() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center font-Manrope">
      <div className="bg-container rounded-xl pt-6">
        <div className="text-custwhite text-3xl font-light px-10 mb-5">
          Select Option
        </div>
        <div className="flex justify-between gap-4 pt-8 pb-9 mx-10 px-10 border-t-2 border-black">
          <button
            className="bg-custwhite py-2 px-8 rounded-full"
            onClick={() => {
              navigate("/create");
            }}
          >
            Start Challenge
          </button>
          <button
            className="bg-custwhite py-2 px-8 rounded-full"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup2;
