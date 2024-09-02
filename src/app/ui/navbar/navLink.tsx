export default function NavLink({
  name,
  inView,
  scrollToSection,
}: {
  name: string,
  inView: boolean;
  scrollToSection: (id: string) => void;
}) {
  return (
    <li
      className={`navbar-link ${inView ? "bg-black text-white" : "bg-none text-black"}`}
    >
      <button
        className=""
        onClick={() => scrollToSection(`${name}Section`)}>
        {name}
      </button>
    </li>
  )
}