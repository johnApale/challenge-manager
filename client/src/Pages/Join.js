import React, { useState } from "react";

function Join() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center bg-container min-w-0  rounded-xl py-8 px-14 font-Manrope">
        {/* Center Container */}
        <div className="text-custwhite text-3xl font-light">Join Challenge</div>
        <div className="w-full border-y-2 border-black my-5 py-5 text-sm">
          <input
            className="bg-custwhite text-black w-full rounded h-10 px-4 mb-4"
            type="text"
            placeholder="Challenge ID"
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <input
            className="bg-custwhite text-black w-full rounded h-10 px-4"
            type="text"
            placeholder="Password"
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-lightblack text-custwhite text-sm font-light px-16 py-3 rounded-xl">
            Go Back
          </button>
          <button className="bg-lightblack text-custwhite text-sm font-light px-16 py-3 rounded-xl">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join;
