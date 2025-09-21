import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://68cf967bec1a5ff33824efb4.mockapi.io/data/data")
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-14 mr-7 bg-[#181818]">
      {videos.map((video) => (
        <Link key={video.id} to={`/video/${video.id}`}>
          <div className="bg-[#202020] rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex gap-3 p-3">
              <img
                src={video.channelLogo}
                alt={video.channelName}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-white">
                <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.channelName}</p>
                <p className="text-xs text-gray-500">
                  {video.views} • {video.uploadedAt}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
