"use client";

import useVisibilityTracking from "../hook/useVisibilityTracking";
import Navbar from "./navbar/navbar";
import Section from "./sections/section";

export default function Content() {
  const sectionsIds = ["about", "experience", "projects", "skills", "contact"];
  const descriptionTxt = "I'm a software developer.";

  const sectionsVisibilityTracking = useVisibilityTracking(sectionsIds);

  const scrollSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const container = document.getElementById("sectionsContainer");

    if (section && container) {
      // Smooth scrolling to the section
      container.scrollTo({
        top: section.offsetTop - container.offsetTop, // Calculate the offset from the container
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.error('Section or container not found')
    }
  };

  return (
    <div className="h-screen flex items-center justify-center" id="content">
      <div className="h-full w-1/3 py-40 pl-20">
        <h2 className="text-2xl font-medium">{descriptionTxt}</h2>
        <Navbar
          keys={sectionsIds}
          scrollToSection={scrollSection}
          inViewCollection={sectionsVisibilityTracking}
        />
      </div>
      <div
        className="h-full w-2/3 pr-8 overflow-auto scrollbar-hide"
        id="sectionsContainer"
      >
        {sectionsIds.map((id) => (
          <Section
            key={id}
            interceptionRef={sectionsVisibilityTracking[id].ref}
            name={id}
          />
        ))
        }
      </div>
    </div>
  );
}
