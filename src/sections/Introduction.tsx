export default function Introduction() {
  const description =
    "a 20 y/o, Dubai raised creator, with an almost annoying ability to say exactly what everyone is thinking but nobody has put into words yet. The account is a proven engine for viral, highly shareable content targeting Gen Z";
  const imageUrl = "public/pfp.jpeg";
  const account = "@chickunt3nders";
  const instagramUrl = "https://www.instagram.com/chickunt3nders/";
  return (
    <>
      <div className="w-full h-screen flex items-center font-sans select-none">
        <div className="w-1/2  text-center  flex justify-center relative">
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
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-3 py-2 rounded-md text-sm font-semibold tracking-wide flex items-center gap-1 shadow-md after:content-[''] after:absolute after:-top-1 after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-black/75 hover:cursor-pointer transition duration-300 hover:scale-105"
            onClick={() =>
              window.open(instagramUrl, "_blank", "noopener noreferrer")
            }
          >
            {account}
          </div>
        </div>
        <div className="w-1/2 h-100 -mx-30 text-center flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold text-(--font-color)">Hello, I'm</h1>

          <div className="pt-10">
            {
              //<span className="text-8xl">&#x2726;</span>
            }
            <h1 className="inline heading text-8xl text-(--font-color)">
              Abeer Tayyeb
            </h1>
          </div>

          <div className="pt-9 w-3/4 text-xl">{description}</div>
        </div>
      </div>
    </>
  );
}
