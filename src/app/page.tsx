import Content from "./ui/content";
import Welcome from "./ui/welcome";

export default function Home() {
	return (
		<main className="flex w-screen flex-col">
			<Welcome />
			<Content />
		</main>
	);
}
