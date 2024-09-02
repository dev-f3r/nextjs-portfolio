"use client";

import Navbar from "./navbar/navbar";
import Section from "./section";
import { useInView } from "react-intersection-observer";

// Custom hook to track the visibility of sections based on their IDs
function useVisibilityTracking(ids: string[], options = { threshold: 0.65 }) {
  // Reduce the array of IDs into an object containing refs and inView states
  return ids.reduce((acc, id) => {
    // useInView hook provides ref and visibility state for each element
    const { ref, inView } = useInView(options);
    
    // Store the ref and inView state in an object, keyed by the section ID
    acc[id] = { ref, inView };
    
    return acc;
  }, {} as { [key: string]: { ref: (node?: Element | null | undefined) => void, inView: boolean } });
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
        <h2 className="text-2xl font-medium">{descriptionTxt}</h2>
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
