"use client";

import Navbar from "./navbar/navbar";
import Section from "./section";
import { useInView } from "react-intersection-observer";

function useVisibilityTracking(ids: string[], options = { threshold: 0.7 }) {
  return ids.reduce((acc, id) => {
    const { ref, inView } = useInView(options);
    acc[id] = { ref, inView };
    return acc;
  }, {} as { [key: string]: { ref: (node?: Element | null | undefined) => void, inView: boolean } })
}

export default function Content() {
  const sectionsIds = ["about", "experience", "skills", "contact"];
  const descriptionTxt = "I'm a software developer.";

  const sectionsVisibilityTracking = useVisibilityTracking(sectionsIds);

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
          keys={sectionsIds}
          scrollToSection={scrollSection}
          inViewCollection={sectionsVisibilityTracking}
        />
      </div>
      <div
        className="h-full w-1/2 pr-8 overflow-auto scrollbar-hide"
        id="sectionsContainer"
      >
        {sectionsIds.map((id) => (
          <Section
            key={id}
            inViewRef={sectionsVisibilityTracking[id].ref}
            title={id}
          />
        ))

        }
      </div>
    </div>
  );
}
