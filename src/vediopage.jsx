import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://68cf967bec1a5ff33824efb4.mockapi.io/data/data/${id}`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  }, [id]);

  if (!video) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 flex gap-7 align-center bg-[#181818] text-white justify-center">
        <div>
     <h1 className="text-2xl font-bold text-amber-50  mb-4">{video.title}</h1>
      <img
        src={video.thumbnail}
        className="w-xl rounded-lg"
      />
      <p className="mt-4 text-gray-700">{video.description}</p>
        </div>
      <div>
              <p className="text-amber-50 text-center max-w-2xl mr-15 mt-28">{video.vedioText}</p>
      </div>
       
    </div>
  );
}
