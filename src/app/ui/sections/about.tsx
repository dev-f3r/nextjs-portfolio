import { about } from "@lib/placeholder-data";

export default function AboutSection() {
	return (
		<p className="px-10 py-8 border-2 rounded-xl hover:shadow-lg">
			{about.txt}
		</p>
	);
}
