import * as SiIcons from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: string;
  color: string;
};

export default function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = (SiIcons as unknown as Record<string, IconType>)[skill.icon];

  return (
    <span
      className="
        group
        flex shrink-0 items-center gap-2
        whitespace-nowrap
        rounded-full
        border border-border
        bg-muted
        px-4 py-2
        text-sm text-muted-foreground
        transition-all duration-300
        hover:border-accent
        hover:bg-accent
        hover:text-foreground
        hover:shadow-lg
      "
    >
      {Icon && (
        <Icon
          style={{ color: skill.color }}
          className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
        />
      )}
      {skill.name}
    </span>
  );
}