export default function Account() {
  const description = `
  target audience: 18-24 y/o
regions: UAE, US and PK
content pillars:
 relatable gen Z humor
 generational commentary
 makeup + hot takes
 lifestyle talkable content
 
`;
  return (
    <div className="w-full min-h-screen p-12 font-sans select-none">
      {/* Header Section */}
      <div className="relative mb-16">
        <span className="text-(--font-color) text-3xl font-extrabold block tracking-tight ml-3 mb-2">
          Account
        </span>
        <div className="flex items-center w-full -mt-2.5">
          <h1 className="text-(--font-color) text-[5rem] font-black tracking-tight leading-none pr-8">
            Overview
          </h1>
          {/* Custom Horizontal Line with Star Accent */}
          <div className="grow flex items-center relative">
            <div className="h-[3px] bg-(--font-color) w-full" />
            <svg
              className="absolute right-0 text-(--font-color) fill-current w-24 h-24 mt-[-0.5px] translate-x-4"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c.5 6.5 5.5 11.5 12 12-6.5.5-11.5 5.5-12 12-.5-6.5-5.5-11.5-12-12 6.5-.5 11.5-5.5 12-12z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main 3-Column Grid */}

      <div className="grid grid-rows bg-amber-200 text-center md:grid-cols-[1.5fr_1fr_1fr] gap-4">
        <div className="p-4  bg-red-300">{description}</div>
        <div className="p-4  bg-blue-300">chart</div>
        <div className="p-4  bg-green-300">picture of you crushed it</div>
      </div>
    </div>
  );
}
