export default function Introduction() {
  const description =
    "20 y/o, Dubai-raised creator, with the ability to say exactly what everyone is thinking but nobody has put into words yet. My account is a proven engine for viral, highly shareable content, targeting Gen Z";

  const imageUrl = "/pfp.jpeg";
  const account = "@chickunt3nders";
  const instagramUrl = "https://www.instagram.com/chickunt3nders/";

  return (
    <>
      {/* Changed flex switching, heights, gaps, and padding rules from md: to lg: to prevent layout crushing */}
      <div className="w-full min-h-screen lg:h-screen flex flex-col-reverse pt-20 lg:flex-row items-center justify-center font-sans select-none gap-10 lg:gap-0 flex-wrap py-10 lg:py-0">
        {/* Left Column: Kept completely intact, just deferred the negative margin and width adjustments until lg */}
        <div className="w-full lg:w-1/2 lg:-ml-50 text-center flex justify-center relative">
          <div className="relative">
            <img
              src={imageUrl}
              className="w-xs object-contain hover:cursor-pointer"
              alt="Abeer Tayyeb"
              onClick={() =>
                window.open(instagramUrl, "_blank", "noopener noreferrer")
              }
            />
            {/* Instagram Style Tag */}
            <div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-3 py-2 rounded-md text-sm font-semibold tracking-wide flex items-center gap-1 shadow-md after:content-[''] after:absolute after:-top-1 after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-black/75 hover:cursor-pointer transition duration-300 hover:scale-105 whitespace-nowrap"
              onClick={() =>
                window.open(instagramUrl, "_blank", "noopener noreferrer")
              }
            >
              {account}
            </div>
          </div>
        </div>

        {/* Right Column: Deferring negative margins and text-8xl formatting until lg ensures everything fits inside the viewport */}
        <div className="w-full lg:w-1/2 h-auto lg:h-100 lg:-mx-30 text-center flex flex-col justify-center items-center px-4 lg:px-0">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-(--font-color)">
            Hello, I'm
          </h1>

          <div className="pt-6 lg:pt-10">
            <h1 className="inline heading text-5xl sm:text-6xl lg:text-8xl text-(--font-color)">
              Abeer Tayyeb
            </h1>
          </div>

          <div
            className="pt-6 lg:pt-9 w-11/12 lg:w-3/4 text-lg lg:text-xl fon-ybol"
            style={{ fontFamily: "serif" }}
          >
            {description}
          </div>
        </div>
      </div>
    </>
  );
}
