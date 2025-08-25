import { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle sticky effect on scroll
  const handleScroll = () => {
    setIsSticky(window.scrollY > 20);

    // Detect active section on scroll
    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - 100; // Adjust offset for header height
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id); // set active on click
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header

      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isSticky
          ? "bg-black/40 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div
          className="text-2xl md:text-3xl font-extrabold  cursor-pointer hover:text-purple-600 transition-all"
          onClick={() => scrollToSection("hero")}
        >
          <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"></span>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex space-x-8  q uppercase text-sm font-medium">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={`relative p-2 rounded-sm transition-all ${
                activeSection === id
                  ? "text-purple-600 font-bold"
                  : "text-white hover:text-purple-600"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger (Mobile) */}
        <div
          className="lg:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-6 bg-gray-800 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-gray-800 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-gray-800 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col space-y-4 lg:hidden">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={`transition-all ${
                  activeSection === id
                    ? "text-purple-600 font-bold"
                    : "text-gray-800 hover:text-purple-800"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
