import type { JobExperience } from "@/app/lib/definitions";
import {
	ArrowTopRightOnSquareIcon,
	FireIcon as PlaceholderIcon,
} from "@heroicons/react/24/solid";

export default function ExperienceItem(job: JobExperience) {
	return (
		<div className="cursor-pointer border-2 hover:shadow-lg rounded-xl py-5 px-10 group">
			<header className="flex flex-row w-full justify-between mb-2">
				<div className="flex flex-col">
					<h1 className="text-lg font-medium">
						{job.title} - {job.company}
					</h1>
					<p className="text-base text-gray-800 font-semibold">
						{job.from} - {job.to}
					</p>
				</div>
				<ArrowTopRightOnSquareIcon
					height={25}
					width={25}
					className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				/>
			</header>
			<div className="flex-col gap-5">
				<p className="text-sm mb-2">{job.description}</p>
				<div className="flex gap-5">
					{job.techStack.map((item) => (
						// TODO: Add technology icon
						<PlaceholderIcon height={25} />
					))}
				</div>
			</div>
		</div>
	);
}
