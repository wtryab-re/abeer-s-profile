export default function Account() {
  const contentPillars = [
    "relatable gen Z humor",
    "generational commentary",
    "makeup + hot takes",
    "lifestyle talkable content",
  ];

  const statsURL = ["/stats/stats_1.jpeg", "/stats/stats_2.jpeg"];

  return (
    <section
      id="overview"
      className="w-full min-h-screen bg-[#faf6f0] px-8 py-5 font-sans select-none"
    >
      {/* Outer wrapper keeping the master layout wide to match the portfolio max-width */}
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section (Matches Brands Layout exactly) --- */}
        <div className="text-(--font-color)">
          <span className="text-xs ml-2 sm:text-sm font-black tracking-widest uppercase">
            Account
          </span>

          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight shrink-0">
              Overview
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

        {/* --- Card Wrapper Container (Matches amber container style) --- */}
        <div className="flex flex-col md:flex-row items-center justify-around md:justify-center gap-6 flex-wrap rounded-2xl">
          {/* Column 1: Info Card styled like the video data cards */}
          <div className=" rounded-2xl py-4 w-80 shadow-lg mb-5 flex flex-col justify-between h text-left bg-(--font-color) font-sans">
            <div className="p-5  text-lg h-full overflow-y-auto space-y-2">
              <p>
                <span className="font-extrabold text-(--bg-color) block uppercase text-xs tracking-wider mb-0.5">
                  Target Audience
                </span>
                <span className="font-bold text-xl">18-24 y/o</span>
              </p>
              <p>
                <span className="font-extrabold block text-(--bg-color) uppercase text-xs tracking-wider mb-0.5">
                  Audience Type
                </span>
                <span className="font-bold text-xl ">80% women</span>
              </p>
              <p>
                <span className="font-extrabold block text-(--bg-color) uppercase text-xs tracking-wider mb-0.5">
                  Regions
                </span>
                <span className="font-bold text-xl">
                  The UAE, The US and Pakistan
                </span>
              </p>
              <div className="pt-2">
                <span className="font-extrabold block text-(--bg-color) uppercase text-xs tracking-wider mb-1">
                  Content Pillars
                </span>
                <ul className="ml-4 list-disc list-inside font-bold text-base space-y-0.5">
                  {contentPillars.map((pillar) => (
                    <li key={pillar}>{pillar}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: Stats Image Card 1 */}
          <div className="rounded-2xl w-80 mb-5 shadow-lg">
            <img
              src={statsURL[0]}
              className="w-full h-full object-cover rounded-2xl"
              alt="Stats Overview 1"
            />
          </div>

          {/* Column 3: Stats Image Card 2 */}
          <div className="rounded-2xl w-80  mb-5 hover shadow-lg">
            <img
              src={statsURL[1]}
              className="w-full h-full rounded-2xl object-cover"
              alt="Stats Overview 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
