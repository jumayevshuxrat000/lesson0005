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
          className="px-4 py-2 bg-[#303030] rounded-full hover:bg-[#383838] whitespace-nowrap"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
