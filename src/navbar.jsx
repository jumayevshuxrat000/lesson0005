import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaRegFolder,
  FaHistory,
  FaVideo,
  FaClock,
  FaThumbsUp,
  FaChevronDown,
  FaPlayCircle,
  FaGamepad,
  FaBroadcastTower,
} from "react-icons/fa";

export default function Sidebar() {
  return (
<aside className="w-60 h-screen bg-[#202020] text-white p-3 overflow-y-auto">
     <nav className="space-y-1 border-b border-gray-700 pb-3">
      <Link to="/" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
        <FaHome /> <span>Home</span>
      </Link>
  
      <Link to="/explore" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
        <FaCompass /> <span>Explore</span>
      </Link>
  
      <Link to="/subscriptions" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
        <FaRegFolder /> <span>Subscriptions</span>
      </Link>
      </nav>

      <nav className="space-y-1 border-b border-gray-700 py-3">
        <a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
          <FaRegFolder /> <span>Library</span>
        </a>
        <a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
          <FaHistory /> <span>History</span>
        </a>
        <a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
          <FaVideo /> <span>Your Videos</span>
        </a>
        <a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
          <FaClock /> <span>Watch Later</span>
        </a>
        <a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
          <FaThumbsUp /> <span>Liked Videos</span>
        </a>
        <a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
          <FaChevronDown /> <span>Show More</span>
        </a>
      </nav>
      <div className="py-3 border-b border-gray-700">
        <h2 className="px-3 text-sm font-semibold text-gray-400 mb-2">
          SUBSCRIPTIONS
        </h2>
        <div className="space-y-1">
          {[
            "James Gouse",
            "Alan Cooper",
            "Marcus Levin",
            "Alexis Sears",
            "Jesica Lambert",
            "Anna White",
            "Skylar Dias",
          ].map((name, i) => (
            <a
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer"
            >
              <img
                src={`https://i.pravatar.cc/30?img`}
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm">{name}</span>
            </a>
          ))}
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
            <FaChevronDown /> <span>Show 13 more</span>
          </a>
        </div>
      </div>
      <div className="py-3">
        <h2 className="px-3 text-sm font-semibold text-gray-400 mb-2">
          MORE FROM YOUTUBE
        </h2>
        <div className="space-y-1">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
            <FaPlayCircle /> <span>Youtube Premium</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
            <FaGamepad /> <span>Gaming</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#383838] cursor-pointer">
            <FaBroadcastTower /> <span>Live</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
