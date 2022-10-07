import React, { useState } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [isActive, setIsActive] = useState(0);
  const items = [
    { title: "Dashboard", icon: <DashboardRoundedIcon />, path: "/home" },

    { title: "Profile", icon: <PersonRoundedIcon />, path: "/profile" },
    {
      title: "Participants",
      icon: <GroupsRoundedIcon />,
      path: "/participants",
    },
    { title: "Progress", icon: <TrendingUpRoundedIcon />, path: "/progress" },
    { title: "Settings", icon: <SettingsRoundedIcon />, path: "/settings" },
  ];

  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/signup-2" ||
    window.location.pathname.includes("/join") ||
    location.pathname === "/create" ||
    location.pathname === "/forgot-password"
  ) {
    return null;
  }

  return (
    <div className="flex mr-8 ">
      <div className="flex flex-col bg-container h-fit pt-8 w-24 px-4 rounded-3xl">
        <ul className="">
          {items.map((menu, index) => (
            <>
              {isActive === index ? (
                <li
                  key={index}
                  className=" bg-blue-900 text-white text-lg rounded-2xl font-semibold flex items-center gap-x-8 cursor-pointer mb-8"
                >
                  <span className="flex justify-center align-center pl-5 my-5">
                    {menu.icon}
                  </span>
                  {/* <span className="pt-1">{menu.title}</span> */}
                </li>
              ) : (
                <Link to={menu.path}>
                  <li
                    key={index}
                    className="font-Mulish text-custwhite text-lg font-thin flex items-center gap-x-8 cursor-pointer mb-8 hover:bg-lightcontainer rounded-2xl"
                    onClick={() => setIsActive(index)}
                  >
                    <span className="flex justify-center content-end pl-5 my-5">
                      {menu.icon}
                    </span>
                    {/* <span className="pt-1">{menu.title}</span> */}
                  </li>
                </Link>
              )}
            </>
          ))}
        </ul>
        <div className="mt-24 mb-6 bg-black rounded-3xl p-4">
          <DataSaverOnOutlinedIcon
            fontSize="large"
            style={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
