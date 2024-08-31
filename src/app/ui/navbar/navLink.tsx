export default function NavLink({
  name,
  inViewCollection,
  scrollToSection,
}: {
  name: string,
  inViewCollection: { [name: string]: boolean };
  scrollToSection: (id: string) => void;
}) {
  return (
    <li
      className={`navbar-link ${inViewCollection[name] ? "bg-black text-white" : "bg-none text-black"}`}
    >
      <button
        className=""
        onClick={() => scrollToSection(`${name}Section`)}>
        {name}
      </button>
    </li>
  )
}