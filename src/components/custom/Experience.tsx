import type { Experience } from "@/types/Experience";

interface ExperienceCompProps {
  experience: Experience;
}

export default function ExperienceComp({ experience }: ExperienceCompProps) {
  return (
    <div className="leading-3">
      <p className="font-bold text-md flex gap-1 flex-wrap items-center nunito mb-1">
        {experience.company}
      </p>
      <p className="font-normal text-sm flex gap-1 flex-wrap items-center">
        {experience.position}
        <span className="text-muted-foreground">&bull;</span>{" "}
        <span className="text-muted-foreground font-light">
          {experience.period.start} - {experience.period.end}
        </span>
      </p>
      <div className="mt-3 space-y-2">
        {experience.desc.map((text) => (
          <p className="font-light text-neutral-800 text-xs">{text}</p>
        ))}
      </div>
    </div>
  );
}
