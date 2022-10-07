import React from "react";
import LeaderboardCard from "./LeaderboardCard";

function Leaderboard() {
  const users = [
    { name: "John Apale", place: "1st" },
    { name: "Mark Dayot", place: "2nd" },
    // { name: "Kevin Dayot", place: "3rd" },
  ];
  return (
    <div className="font-Manrope text-custwhite">
      <div className="flex justify-between mb-7">
        <div className="text-2xl">Leaderboard</div>
        <div className="bg-lightcontainer mr-5 py-2 px-4 rounded-lg text-sm hover:cursor-pointer">
          View All
        </div>
      </div>
      <div className="flex justify-between">
        {users.map((user, index) => (
          <div className="w-1/2 mr-5" key={index}>
            <LeaderboardCard name={user.name} place={user.place} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
