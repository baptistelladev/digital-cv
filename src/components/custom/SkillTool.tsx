import type { SkillTool } from "@/types/SkillTool";
import { Tooltip, TooltipContent2, TooltipTrigger } from "../ui/tooltip";

interface SkillToolProps {
  skill: SkillTool;
}

export default function SkillToolComp({ skill }: SkillToolProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="hover:opacity-50 transition-all duration-300 px-2 flex items-center justify-center relative hover:scale-110 hover:-rotate-10">
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.logo}`}
            className={`${skill.cssMaxWidth ? skill.cssMaxWidth : "max-w-8"}`}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent2 sideOffset={0} side="bottom" className="rounded-full ">
        <p>{skill.text}</p>
      </TooltipContent2>
    </Tooltip>
  );
}
