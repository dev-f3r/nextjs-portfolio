"use client";

import Navbar from "./navbar";
import Section from "./section";
import { useInView } from "react-intersection-observer";

export default function Content() {
  const descriptionTxt = "I'm a software developer.";

  // TODO: Make a sections container component and pass all inView logic
  const inViewOptions = {
    threshold: 0.8,
  };
  const { ref: aboutRef, inView: isAboutRef } = useInView(inViewOptions);
  const { ref: experienceRef, inView: isExperienceRef } =
    useInView(inViewOptions);
  const { ref: skillsRef, inView: isSkillsRef } = useInView(inViewOptions);
  const { ref: contactRef, inView: isContactRef } = useInView(inViewOptions);
  const inViewElements = {
    about: isAboutRef,
    experience: isExperienceRef,
    skills: isSkillsRef,
    contact: isContactRef,
  };

  const scrollSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const container = document.getElementById("sectionsContainer");
    `react-intersection-observer`;
    if (section && container) {
      container.scrollTo({
        top: section.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center" id="content">
      <div className="h-full w-1/2 py-40 pl-20">
        <h2 className="text-1xl font-medium">{descriptionTxt}</h2>
        <Navbar
          scrollToSection={scrollSection}
          inViewCollection={inViewElements}
        />
      </div>
      <div
        className="h-full w-1/2 pr-8 overflow-auto scrollbar-hide"
        id="sectionsContainer"
      >
        <Section inViewRef={aboutRef} title="about" />
        <Section inViewRef={experienceRef} title="experience" />
        <Section inViewRef={skillsRef} title="skills" />
        <Section inViewRef={contactRef} title="contact" />
      </div>
    </div>
  );
}
