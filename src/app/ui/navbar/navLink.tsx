import { capFirst } from "@/app/lib/utils";

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
      className={`hover:bg-gray-500 px-5 rounded-md ${inView ? "bg-black text-white" : "bg-none text-black"}`}
    >
      <button
        className="w-full text-left font-medium"
        onClick={() => scrollToSection(`${name}Section`)}>
        {capFirst(name)}
      </button>
    </li>
  )
}