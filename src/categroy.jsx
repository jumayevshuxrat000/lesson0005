import React from "react";

export default function Categories() {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "News",
    "Sports",
    "Movies",
    "Trending",
    "Tech",
    "Travel",
    "Food",
    "Fashion",
    "Education",
    "Comedy",
    "Podcasts",
  ];

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-[#202020] text-white overflow-x-auto flex-nowrap scrollbar-hide">
      {categories.map((cat, i) => (
        <button
          key={i}
          className={`px-4 py-1 rounded-lg whitespace-nowrap border text-sm ${
            i === 0
              ? "bg-white text-black"
              : "bg-[#303030] text-white hover:bg-[#4a4a4a]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
