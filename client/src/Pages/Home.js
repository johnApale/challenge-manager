import React from "react";
import Chart from "../components/Chart";
import CurrentCard from "../components/CurrentCard";
import Leaderboard from "../components/Leaderboard";
import Recent from "../components/Recent";

function Home() {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="w-2/3">
          <Leaderboard />
        </div>
        <div className="w-3/5 h-fit ml-1 bg-container rounded-3xl pt-7 pb-1 px-7">
          <Recent />
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="w-2/3">
          <Chart />
        </div>
        <div className="w-1/3 ml-5">
          <CurrentCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
