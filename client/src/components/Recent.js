import React from "react";

function Recent() {
  const submissions = [
    {
      initials: "JA",
      name: "John Apale",
      date: "September 1, 2022",
      weight: "170.2 lbs",
      time: "23:00",
    },
    {
      initials: "MD",
      name: "Mark Dayot",
      date: "August 26, 2022",
      weight: "145.6 lbs",
      time: "20:00",
    },
    {
      initials: "KD",
      name: "Kevin Dayot",
      date: "August 26, 2022",
      weight: "160.2 lbs",
      time: "15:00",
    },
  ];
  return (
    <div className="font-Manrope">
      <span className="text-custwhite text-xl">Recent Submissions</span>

      <div className="mt-8 mb-5 text-custgrey grid grid-cols-4 gap-4">
        <div className="col-span-2">Participant</div>
        <div className="">Weight</div>
        <div className="">Time</div>
      </div>

      {submissions.map((sub, index) => (
        <div
          className="py-4 text-custwhite grid grid-cols-4 gap-4 items-center border-t border-black"
          key={index}
        >
          <div className="col-span-2 flex">
            <div className="flex justify-center items-center rounded-full w-9 h-9 bg-white mr-4 text-black hover:cursor-pointer">
              {" "}
              {sub.initials}
            </div>
            <div className="grid grid-rows-2">
              <span className="text-custwhite text-sm hover:cursor-pointer hover:underline">
                {sub.name}
              </span>
              <span className="text-custgrey text-xs font-light">
                {sub.date}
              </span>
            </div>
          </div>
          <div className="text-custwhite ">{sub.weight}</div>
          <div className="grid grid-cols-2 justify-items-stretch">
            <div className="text-custwhite">{sub.time}</div>
            <div className="flex justify-center items-center text-xs font-bold justify-self-end w-6 h-6 rounded-full bg-black hover:cursor-pointer">
              +
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recent;
