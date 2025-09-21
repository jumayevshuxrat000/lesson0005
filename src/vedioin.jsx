import React from "react";
import VedioPage from "./vediopage";

export default function ChannelHeader() {
  return (
    <>
        <div className="flex-1 mr-5">
      <div className="w-full">
        <div className="w-full h-40 bg-gradient-to-r from-yellow-400 via-orange-500 to-green-500 flex">
          <div className="w-1/3 flex justify-center items-center bg-yellow-400">
            <div className="w-20 h-20 rounded-full bg-white opacity-70 shadow-lg"></div>
          </div>
          <div className="w-1/3 flex justify-center items-center bg-orange-500">
            <div className="w-20 h-20 rounded-full bg-white opacity-70 shadow-lg"></div>
          </div>
          <div className="w-1/3 flex justify-center items-center bg-green-500">
            <div className="w-20 h-20 rounded-full bg-white opacity-70 shadow-lg"></div>
          </div>
        </div>
        <div className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img
                src="https://imgv3.fotor.com/images/homepage-feature-card/fotor-3d-avatar.jpg"
                alt="profile"
                className="w-20 h-20 rounded-full border-4 border-black -mt-12"
              />
              <div>
                <h2 className="text-xl font-semibold">Marcus Levin</h2>
                <p className="text-sm text-gray-400">1.2M subscribers</p>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 mr-3 rounded text-sm font-medium">
              SUBSCRIBE
            </button>
          </div>

          <div className="border-t border-gray-700">
            <ul className="flex gap-6 px-6 py-3 text-sm font-medium">
              <li className="text-white border-b-2 border-white">HOME</li>
              <li className="text-gray-400 hover:text-white">VIDEOS</li>
              <li className="text-gray-400 hover:text-white">PLAYLISTS</li>
              <li className="text-gray-400 hover:text-white">COMMUNITY</li>
              <li className="text-gray-400 hover:text-white">CHANNELS</li>
              <li className="text-gray-400 hover:text-white">ABOUT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <VedioPage />
    </>
  );
}
