export default function Header() {
  const sections = ["home", "overview", "brands", "work", "contact"];

  return (
    <header className="flex flex-col py-4 pt-3 fixed top-0 left-0 right-0 z-50">
      <ul className="flex justify-center space-x-4 text-sm text-gray-600 bg-(--font-color)/10 backdrop-blur-xs font-serif rounded-3xl w-fit mx-auto px-4 py-2">
        {sections.map((section) => (
          <li
            key={section}
            className="hover:scale-120 transition-transform duration-300"
          >
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
