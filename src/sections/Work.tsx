import React, { useState, useEffect } from "react";
import { MdOutlineCategory, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart, FaInstagram } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";

export default function Work() {
  const vidData = [
    {
      id: 1,
      vidPath: "/sample/s3.mp4",
      instaUrl: "https://www.instagram.com/chickunt3enders/reel/DWjRTE2gk4b/",
      views: "4.6M+ Views",
      likes: "349K Likes",
      category: "Tech UGC",
      reposts: "6.9K reposts",
      strategy: "Engagement generated using relatable GenZ experiences.",
    },
    {
      id: 2,
      vidPath: "/sample/s1.mp4",
      instaUrl: "https://www.instagram.com/chickunt3enders/reel/DXpb80wAojS/",
      views: "1.2M+ Views",
      likes: "7K Likes",
      category: "PLACE UGC",
      reposts: "6.3K reposts",
      strategy: "Leveraging ironic GenZ behavior, creating traction.",
    },
    {
      id: 3,
      vidPath: "/sample/s2.mp4",
      instaUrl: "https://www.instagram.com/chickunt3enders/reel/DUTnqr6gkze/",
      views: "115 Views",
      likes: "10 Likes",
      category: "Food UGC",
      reposts: "5 reposts",
      strategy: "Targeting diverse audiences and niches for growth.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 scale-100");

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Start the fade-out
      setFadeState("opacity-0 scale-[0.97]");

      setTimeout(() => {
        // 2. Change the video source *while* it is completely transparent
        setCurrentIndex((prevIndex) => (prevIndex + 1) % vidData.length);

        // 3. Wait a tiny fraction of a frame before fading back in
        setTimeout(() => {
          setFadeState("opacity-100 scale-100");
        }, 30);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [vidData.length]);

  const currentVid = vidData[currentIndex];

  // Isolated text transition template class
  const txtFade = `transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${fadeState}`;

  return (
    <section
      id="work"
      className="w-full min-h-screen px-8 py-5 font-sans select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-(--font-color)">
          <span className="text-xs ml-2 sm:text-sm font-black tracking-widest uppercase">
            most popular
          </span>

          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight shrink-0">
              Sample Work{" "}
            </h1>

            <div className="grow flex items-center relative">
              <div className="h-0.75 bg-(--font-color) w-full" />
              <svg
                className="absolute right-0 text-(--font-color) fill-current w-24 h-24 mt-[-0.5px] translate-x-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c.5 6.5 5.5 11.5 12 12-6.5.5-11.5 5.5-12 12-.5-6.5-5.5-11.5-12-12 6.5-.5 11.5-5.5 12-12z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center py-6 gap-6">
          {/* --- PHONE & VIDEO CONTAINER --- */}
          <div className="h-110 -my-5 aspect-9/19.5 relative overflow-hidden rounded-4xl shadow-2xl bg-black">
            <img
              src="/phone.png"
              className="w-full h-full border border-r-3 box-border object-stretch absolute top-0 left-0 z-30 pointer-events-none rounded-4x"
              alt="Phone frame"
            />

            <div
              className={`absolute inset-0 p-1 z-10 bg-black transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${fadeState}`}
            >
              <video
                key={currentIndex}
                src={currentVid.vidPath}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-4xl border border-transparent w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- DESCRIPTION PANEL --- */}
          <div className="w-full md:w-1/2 rounded-2xl p-6 min-w-0">
            <h3 className="text-4xl font-bold mb-6 md:block hidden">
              Reels Overview
            </h3>

            <div className="space-y-6">
              {/* --- METRICS GRID --- */}
              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div className="flex items-center gap-3 bg-black/5 p-3 rounded-xl border border-black/10 min-w-0">
                  <MdOutlineCategory className="text-2xl shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:block hidden uppercase font-black opacity-60 tracking-wider">
                      Category
                    </p>
                    <p
                      className={`text-sm font-bold uppercase break-words ${txtFade}`}
                    >
                      {currentVid.category || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Views */}
                <div className="flex items-center gap-3 bg-black/5 p-3 rounded-xl border border-black/10 min-w-0">
                  <MdOutlineRemoveRedEye className="text-2xl shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:block hidden uppercase font-black opacity-60 tracking-wider">
                      Views
                    </p>
                    <p className={`text-sm font-bold break-words ${txtFade}`}>
                      {currentVid.views || "0"}
                    </p>
                  </div>
                </div>

                {/* Likes */}
                <div className="flex items-center gap-3 bg-black/5 p-3 rounded-xl border border-black/10 min-w-0">
                  <FaRegHeart className="text-xl shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:block hidden uppercase font-black opacity-60 tracking-wider">
                      Likes
                    </p>
                    <p className={`text-sm font-bold break-words ${txtFade}`}>
                      {currentVid.likes || "0"}
                    </p>
                  </div>
                </div>

                {/* reposts */}
                <div className="flex items-center gap-3 bg-black/5 p-3 rounded-xl border border-black/10 min-w-0">
                  <BiRepost className="text-2xl shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase md:block hidden font-black opacity-60 tracking-wider">
                      reposts
                    </p>
                    <p className={`text-sm font-bold break-words ${txtFade}`}>
                      {currentVid.reposts || "0"}
                    </p>
                  </div>
                </div>
              </div>

              {/* --- STRATEGY BLOCK --- */}
              <div className="bg-black/5 p-4 rounded-xl border border-black/10 flex gap-3 min-w-0">
                <div className="min-w-0">
                  <p className="text-xs uppercase font-black opacity-60 tracking-wider mb-1">
                    Strategy
                  </p>
                  <p
                    className={`text-sm font-medium leading-relaxed break-words ${txtFade}`}
                  >
                    {currentVid.strategy ||
                      "No strategy description available."}
                  </p>
                </div>
              </div>

              {/* --- URL ACTION --- */}
              <div className="flex justify-center md:justify-center mt-5">
                <a
                  href={currentVid.instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center inline-flex items-center gap-2 bg-(--font-color) text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-(--lighter-font-color) transition-colors shadow-md duration-300"
                >
                  <FaInstagram className="text-base" />
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
