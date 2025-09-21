import React from "react";
import { FaBars, FaSearch, FaMicrophone, FaBell, FaVideo } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#202020] text-white">
      <div className="flex items-center gap-4">
        <button className="text-xl">
          <FaBars />
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="h-5"
        />
      </div>

      <div className="flex items-center flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-1 text-sm text-white placeholder-gray-400 bg-[#121212] border border-[#303030] rounded-l-full focus:outline-none"
        />
        <button className="px-4 py-2 bg-[#303030] rounded-r-full">
          <FaSearch />
        </button>
        <button className="ml-3 text-lg bg-[#121212] p-2 rounded-full">
          <FaMicrophone />
        </button>
      </div>

      <div className="flex items-center gap-5 text-xl">
        <button>
          <FaVideo />
        </button>
        <button>
          <FaBell />
        </button>
        <img
          src="https://imgv3.fotor.com/images/homepage-feature-card/fotor-3d-avatar.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
