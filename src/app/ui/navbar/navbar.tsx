"use client";

import NavLink from "./navLink";

export default function Navbar({
  scrollToSection,
  inViewCollection,
  keys,
}: {
  scrollToSection: (id: string) => void;
  inViewCollection: { [key: string]: boolean };
  keys: string[];
}) {
  return (
    <nav className="mt-5 mr-5">
      <ul className="navbar-links">
        {keys.map((key) => (
          <NavLink
            key={key}
            name={key}
            inViewCollection={inViewCollection}
            scrollToSection={scrollToSection}
          />
        ))
        }
      </ul>
    </nav>
  );
}
