
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import LevelBadge from "./LevelBadge";

interface ImmersionCardProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: number;
  category: string;
  className?: string;
}

const ImmersionCard = ({
  title,
  description,
  level,
  duration,
  category,
  className,
}: ImmersionCardProps) => {
  return (
    <div className={cn("immersion-card", className)}>
      <div className="absolute top-4 right-4">
        <LevelBadge level={level} showText={false} />
      </div>
      
      <div className="mb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-lingua-teal">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{duration} min</span>
        <Button 
          size="sm"
          className="bg-lingua-teal hover:bg-lingua-teal/90 text-white rounded-full"
        >
          <Play size={16} className="mr-1" />
          Start
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-lingua-teal/20 to-lingua-blue/10 blur-xl"></div>
      <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-lingua-orange/20 blur-lg"></div>
    </div>
  );
};

export default ImmersionCard;
