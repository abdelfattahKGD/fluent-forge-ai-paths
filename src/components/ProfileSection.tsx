
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSection = () => {
  // Mock data - in a real app would come from user profile
  const user = {
    name: "Alex Johnson",
    profilePic: "",
    level: 2,
    xp: 450,
    xpToNextLevel: 500,
    dailyGoal: {
      completed: 2,
      total: 3
    }
  };
  
  const xpProgress = (user.xp / user.xpToNextLevel) * 100;
  const dailyProgress = (user.dailyGoal.completed / user.dailyGoal.total) * 100;

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-3">
        <Avatar className="h-12 w-12 border-2 border-lingua-teal">
          <AvatarImage src={user.profilePic} />
          <AvatarFallback className="bg-lingua-teal/20 text-lingua-teal">AJ</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-gray-500">Level {user.level}</p>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">XP Progress</span>
            <span className="text-lingua-teal">{user.xp}/{user.xpToNextLevel}</span>
          </div>
          <Progress value={xpProgress} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">Daily Goal</span>
            <span className="text-lingua-orange">{user.dailyGoal.completed}/{user.dailyGoal.total} completed</span>
          </div>
          <Progress value={dailyProgress} className="h-2 bg-gray-100" 
            indicatorClassName="bg-lingua-orange" />
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full mt-4 text-gray-700 bg-gray-50 border border-gray-200 justify-between"
      >
        <span>View Profile</span>
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default ProfileSection;
