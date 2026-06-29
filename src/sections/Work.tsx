import React, { useState, useEffect } from "react";

export default function Work() {
  const vidData = [
    {
      id: 1,
      vidPath: "/sample/s1.mp4",
      instaUrl: "https://www.instagram.com/chickunt3enders/reel/DWjRTE2gk4b/",
      views: "150K Views",
      likes: "12K Likes",
      strategy:
        "Hooked with fast-paced Gen Z humor within the first 2 seconds.",
    },
    {
      id: 2,
      vidPath: "/sample/s2.mp4",
      instaUrl: "https://www.instagram.com/chickunt3enders/reel/DXpb80wAojS/",
      views: "85K Views",
      likes: "7K Likes",
      strategy: "Leveraged trending relational commentary audio.",
    },
    {
      id: 3,
      vidPath: "/sample/s3.mp4",
      instaUrl: "https://www.instagram.com/chickunt3enders/reel/DUTnqr6gkze/",
      views: "210K Views",
      likes: "19K Likes",
      strategy: "High-energy lifestyle talkable review styled vlog.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 scale-100");

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Trigger the clean fade out to black background
      setFadeState("opacity-0 scale-[0.97]");

      setTimeout(() => {
        // 2. Switch data handles while fully black out
        setCurrentIndex((prevIndex) => (prevIndex + 1) % vidData.length);

        // 3. Smooth cinematic bounce back in
        setFadeState("opacity-100 scale-100");
      }, 400); // 400ms transition window allows physics frames to settle cleanly
    }, 5000);

    return () => clearInterval(interval);
  }, [vidData.length]);

  const currentVid = vidData[currentIndex];

  return (
    <section className="w-full bg-amber-300 min-h-screen px-8 py-5 font-sans select-none">
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

        <div className="flex flex-col md:flex-row bg-red-300 justify-evenly items-center py-6 gap-6">
          {/* --- PHONE & VIDEO CONTAINER --- */}
          {/* Made Phone taller (h-132) and added bg-black so it stays pitch black during mid-transitions */}
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
                onClick={() => window.open(currentVid.instaUrl, "_blank")}
                key={currentIndex}
                src={currentVid.vidPath}
                autoPlay
                loop
                muted
                playsInline
                className="cursor-pointer rounded-4xl border border-transparent w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- DESCRIPTION PANEL --- */}
          <div className="bg-blue-400 w-1/2 hidden md:block rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <div
              className={`space-y-3 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${fadeState}`}
            >
              <div className="flex gap-4">
                {currentVid.views && (
                  <span className="bg-black/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {currentVid.views}
                  </span>
                )}
                {currentVid.likes && (
                  <span className="bg-black/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {currentVid.likes}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {currentVid.strategy ||
                  "The sample work description goes right here."}
              </p>
              <a
                href={currentVid.instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-bold underline uppercase tracking-wider hover:opacity-80"
              >
                View on Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
