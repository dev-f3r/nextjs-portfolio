import AboutSection from "./about";
import React from "react";
import ExperienceSection from "./experience/experience";
import SkillsSection from "./skills/skills";
import ContactSection from "./contact/contact";

const sections: {[key: string]: React.ReactNode} = {
  about: <AboutSection />,
  experience: <ExperienceSection />,
  skills: <SkillsSection />,
  contact: <ContactSection />,
}

export default function Section({
  name,
  inViewRef,
}: {
  name: string;
  inViewRef?: (node?: Element | null | undefined) => void;
}) {
  return (
    <section
      id={`${name}Section`}
      className={`h-[500px] pt-10`}
      ref={inViewRef}
    >
      {sections[name]}
    </section>
  );
}
