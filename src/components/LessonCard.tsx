
import { Progress } from "@/components/ui/progress";
import LevelBadge from "./LevelBadge";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  progress: number;
  estimatedTime: number;
  imageUrl?: string;
}

const LessonCard = ({
  title,
  description,
  level,
  progress,
  estimatedTime,
  imageUrl,
}: LessonCardProps) => {
  const levelClassMap = {
    beginner: "lesson-card-beginner",
    intermediate: "lesson-card-intermediate",
    advanced: "lesson-card-advanced",
  };

  return (
    <div className={cn("lesson-card group", levelClassMap[level])}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-lingua-teal transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
        </div>
        {imageUrl && (
          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden ml-4 shadow-sm">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LevelBadge level={level} />
          <span className="text-xs text-gray-500">{estimatedTime} min</span>
        </div>
        <div className="flex items-center gap-2">
          <Progress value={progress} className="w-[60px] h-[6px]" />
          <span className="text-xs font-medium">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
