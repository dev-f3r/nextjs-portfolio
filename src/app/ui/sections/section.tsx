import AboutSection from "./about";
import ExperienceSection from "./experience/experience";
import ProjectSection from "./projects/projects";
import SkillsSection from "./skills/skills";
import ContactSection from "./contact/contact";

const sections: { [key: string]: React.ReactNode } = {
	about: <AboutSection />,
	experience: <ExperienceSection />,
	projects: <ProjectSection />,
	skills: <SkillsSection />,
	contact: <ContactSection />,
};

export default function Section({
	name,
	interceptionRef,
}: {
	name: string;
	interceptionRef?: (node?: Element | null | undefined) => void;
}) {
	return (
		<section id={`${name}Section`} className="pt-10 px-5" ref={interceptionRef}>
			{sections[name]}
		</section>
	);
}
