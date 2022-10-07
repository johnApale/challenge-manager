import React from "react";

function LeaderboardCard(props) {
  return (
    <div className="bg-container font-Manrope text-custwhite flex flex-col rounded-3xl">
      <div className="flex justify-end pt-5 pr-5">
        <div className=" py-1 px-6 rounded-full bg-black font-light min-w-fit max-w-fit h-8">
          {props.place ? <span>{props.place}</span> : "null"}
        </div>
      </div>

      <div className="flex justify-center align-center mt-3 mb-5 hover:cursor-pointer">
        {props.pfp ? (
          <img className="w-36" src={props.pfp} />
        ) : (
          <img
            className="w-36"
            src={process.env.PUBLIC_URL + "/default_pfp.png"}
          />
        )}
      </div>
      <div className="flex justify-center align-center bg-lightcontainer py-5 font-light rounded-b-3xl hover:cursor-pointer hover:underline">
        {props.name ? <span>{props.name}</span> : "null"}
      </div>
    </div>
  );
}

export default LeaderboardCard;
