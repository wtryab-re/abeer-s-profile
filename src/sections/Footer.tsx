import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaThreads,
} from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Footer() {
  const makerUrl = "https://linkedin.com/in/warda-tayyeb";
  const socialLinks = [
    {
      label: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/chickunt3nders/",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/abeer-tayyeb-73038a282",
    },
    {
      label: "TikTok",
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@chickunt3nderss",
    },
    {
      label: "Media Kit",
      icon: <IoDocumentTextOutline />,
      url: "https://drive.google.com/file/d/1B5TIRP0F3AjiTeGSQCp5MvhEfk-ZPLwy/view?usp=sharing",
    },
    {
      label: "Threads",
      icon: <FaThreads />,
      url: "https://www.threads.com/@chickunt3nders",
    },
  ];

  return (
    <footer className="w-full bg-(--font-color) text-(--bg-color) px-8 pt-8 pb-8 font-sans select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        {/* --- Social Links Navigation Row --- */}
        <nav className="flex items-center justify-center gap-8 md:gap-12 w-full">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex items-center gap-2 text-xl md:text-xs font-black uppercase tracking-widest transition-transform duration-300 ease-out hover:scale-115 active:scale-95"
            >
              {/* Icon is always visible */}
              <span className="text-xl md:text-sm">{link.icon}</span>

              {/* Text label: hidden on mobile, visible on desktop layout */}
              <span className="hidden md:block opacity-80 group-hover:opacity-100 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* --- Minimalist Divider Decor --- */}
        <div className="w-full max-w-md h-px bg-(--bg-color) opacity-10" />

        {/* --- Signature Credits Row --- */}
        <div className="text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-widest opacity-60">
            made w love by{" "}
            <a
              href={makerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black hover:opacity-100 transition-opacity hover:underline-offset-2 hover:underline"
            >
              @wtryab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
