import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Brands() {
  const brandsData = [
    {
      id: 1,
      brandName: "Wingstop Dubai",
      cards: [
        {
          videoUrl: "/wingstop/w3.mp4",
          views: "100K Views",
          subtitle: "Exposure using GenZ humor",
          instaUrl:
            "https://www.instagram.com/chickunt3nders/reel/DXNFtaMgrhl/",
        },
        {
          videoUrl: "/wingstop/w1.mp4",
          views: "21.1K Views",
          subtitle: "2 AED Wings Campaign",
          instaUrl:
            "https://www.instagram.com/chickunt3nders/reel/DVRqbFWgkW6/",
        },
        {
          videoUrl: "/wingstop/w2.mp4",
          views: "10K Views",
          subtitle: "Shareable POVs",
          instaUrl:
            "https://www.instagram.com/chickunt3nders/reel/DT0obQwAtlQ/",
        },
      ],
    },
    {
      id: 2,
      brandName: "Tealive",
      cards: [
        {
          videoUrl: "/tealive/t1.mp4",
          views: "100K Views",
          subtitle: "Exposure using GenZ humor",
          instaUrl:
            "https://www.instagram.com/chickunt3nders/reel/DXNFtaMgrhl/",
        },
        {
          videoUrl: "/tealive/t2.mp4",
          views: "21.1K Views",
          subtitle: "2 AED Wings Campaign",
          instaUrl:
            "https://www.instagram.com/chickunt3nders/reel/DVRqbFWgkW6/",
        },
        {
          videoUrl: "/tealive/t3.mp4",
          views: "10K Views",
          subtitle: "Shareable POVs",
          instaUrl:
            "https://www.instagram.com/chickunt3nders/reel/DT0obQwAtlQ/",
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in"); // "fade-in" or "fade-out"

  const currentBrand = brandsData[currentIndex];

  const handleNextBrand = () => {
    if (fadeState === "fade-out") return; // Lock button during transition

    // 1. Start the fade out
    setFadeState("fade-out");

    // 2. Wait exactly for the css transition duration (300ms) to finish
    setTimeout(() => {
      // 3. Swap out the data while hidden
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brandsData.length);
      // 4. Trigger the fade back in
      setFadeState("fade-in");
    }, 300);
  };

  return (
    <section className="w-full min-h-screen bg-[#faf6f0] px-8 py-5 font-sans select-none">
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-(--font-color)">
          <div className="flex flex-row justify-between">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase">
              Brands I've Worked With:
            </span>
            <div
              className="text-4xl mr-15 cursor-pointer hover:scale-120 border-1 transition-transform duration-300 rounded-full"
              onClick={handleNextBrand}
              style={{ cursor: "pointer" }}
            >
              <MdOutlineNavigateNext></MdOutlineNavigateNext>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-1 mb-6">
            {/* Smooth dynamic title transitions */}
            <h2
              className={`text-4xl sm:text-6xl font-black tracking-tight shrink-0 transition-all duration-300 ease-in-out ${
                fadeState === "fade-out"
                  ? "opacity-0 transform translate-x-[-10px]"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              {currentBrand.id}. {currentBrand.brandName}
            </h2>

            <div className="grow flex items-center relative">
              <div className="h-[3px] bg-(--font-color) w-full" />

              <div className="absolute right-0 translate-x-4 flex flex-col items-center">
                <svg
                  className="text-(--font-color) fill-current w-24 h-24 mt-[-0.5px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c.5 6.5 5.5 11.5 12 12-6.5.5-11.5 5.5-12 12-.5-6.5-5.5-11.5-12-12 6.5-.5 11.5-5.5 12-12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
