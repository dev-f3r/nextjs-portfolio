"use client";

export default function Navbar({
  scrollToSection,
  inViewCollection,
}: {
  scrollToSection: (id: string) => void;
  inViewCollection: { [key: string]: boolean };
}) {
  return (
    <nav className="mt-5">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li
            className={`navbar-link ${inViewCollection?.about ? "bg-black text-white" : "bg-none text-black"}`}
          >
            <button onClick={() => scrollToSection("aboutSection")}>
              About
            </button>
          </li>
          <li
            className={`navbar-link ${inViewCollection?.experience ? "bg-black text-white" : "bg-none text-black"}`}
          >
            <button onClick={() => scrollToSection("experienceSection")}>
              Experience
            </button>
          </li>
          <li
            className={`navbar-link ${inViewCollection?.skills ? "bg-black text-white" : "bg-none text-black"}`}
          >
            <button onClick={() => scrollToSection("skillsSection")}>
              Skills
            </button>
          </li>
          <li
            className={`navbar-link ${inViewCollection?.contact ? "bg-black text-white" : "bg-none text-black"}`}
          >
            <button onClick={() => scrollToSection("contactSection")}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
