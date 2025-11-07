import type { Work } from "@/types/Work";
import { ExternalLink } from "lucide-react";

interface LastWorkCardProps {
  work: Work;
}

export default function LastWorkCardComp({ work }: LastWorkCardProps) {
  return (
    <div className="bg-sidebar p-4 rounded-md hover:shadow-md transition-shadow duration-300">
      <div className="leading-3">
        <p className="text-xs md:text-sm flex gap-1 flex-wrap items-center nunito font-bold">
          {work.name}
        </p>
        <a
          href={work.href}
          target="_blank"
          className="flex gap-1 flex-wrap items-center text-main underline font-normal underline-offset-2 text-[11px] md:text-xs transition-colors hover:text-main-dark line-clamp-1 w-full justify-start"
        >
          {work.href} <ExternalLink strokeWidth={2} size={14} />
        </a>
      </div>

      <div className="space-y-2 pt-4">
        {work.desc.map((text) => (
          <p className="font-light text-neutral-800 text-xs text-balance">
            {text}.
          </p>
        ))}
      </div>
    </div>
  );
}
