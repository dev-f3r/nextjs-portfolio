import ExperienceItem from "./experienceItem"
import { experienceList } from "@/app/lib/placeholder-data"

export default function ExperienceSection() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      {Object.entries(experienceList).map(([key, value]) => (
        <ExperienceItem key={key} {...value} />
      ))}
    </div>
  )
}