
import { cn } from "@/lib/utils";

type LevelType = "beginner" | "intermediate" | "advanced";

interface LevelBadgeProps {
  level: LevelType;
  showText?: boolean;
  className?: string;
}

const levelStyles = {
  beginner: "bg-lingua-green/20 text-lingua-green border-lingua-green/30",
  intermediate: "bg-lingua-blue/20 text-lingua-blue border-lingua-blue/30",
  advanced: "bg-lingua-purple/20 text-lingua-purple border-lingua-purple/30",
};

const LevelBadge = ({ level, showText = true, className }: LevelBadgeProps) => {
  return (
    <span 
      className={cn(
        "badge border", 
        levelStyles[level],
        className
      )}
    >
      {showText ? level.charAt(0).toUpperCase() + level.slice(1) : ""}
    </span>
  );
};

export default LevelBadge;
