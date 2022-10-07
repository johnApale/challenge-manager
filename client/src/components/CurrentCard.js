import React from "react";

function CurrentCard() {
  return (
    <div className="font-Manrope flex flex-col text-custwhite bg-container h-80 rounded-3xl p-5">
      <div className="text-2xl">Current Weight</div>
      <div className="flex justify-center items-stretch text-8xl h-56 my-5">
        <div className="flex items-center px-3 text-green-600">170.8</div>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-5 py-1 rounded-2xl font-light bg-black">
          + Add Weight
        </button>
      </div>
    </div>
  );
}

export default CurrentCard;
