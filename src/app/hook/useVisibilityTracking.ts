import { useInView } from "react-intersection-observer";

// Custom hook to track the visibility of sections based on their IDs
export default function useVisibilityTracking(ids: string[], options = { threshold: 0.65 }) {
  // Reduce the array of IDs into an object containing refs and inView states
  return ids.reduce((acc, id) => {
    // useInView hook provides ref and visibility state for each element
    const { ref, inView } = useInView(options);

    // Store the ref and inView state in an object, keyed by the section ID
    acc[id] = { ref, inView };

    return acc;
  }, {} as { [key: string]: { ref: (node?: Element | null | undefined) => void, inView: boolean } });
}