import { isObjectEmpty } from "@/app/lib/utils";
import ExperienceItem from "./experienceItem";
import { experienceList } from "@/app/lib/placeholder-data";

export default function ExperienceSection() {
	return (
		<div id="experiencSection p-0 m-0 h-fit">
			{isObjectEmpty(experienceList) ? (
				<div className="flex justify-center items-center h-96">
					<p className="text-4xl font-semibold">¯\_(ツ)_/¯</p>
				</div>
			) : (
				<div className="grid grid-cols-2 gap-5">
					{Object.entries(experienceList).map(([key, value]) => (
						<ExperienceItem key={key} {...value} />
					))}
				</div>
			)}
		</div>
	);
}
