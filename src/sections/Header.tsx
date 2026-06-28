export default function Header() {
  const sections = ["home", "overview", "brands", "work", "contact"];

  return (
    <header className=" flex flex-col py-4 opacity-90 fixed top-0 left-0 right-0 z-50 ">
      <ul className="flex justify-center space-x-4 text-sm text-gray-800  rounded-3xl w-fit mx-auto px-4 py-2 bg-pink-200">
        {sections.map((section) => (
          <li
            key={section}
            id={section}
            className="hover:scale-110 transition-transform duration-300"
          >
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
