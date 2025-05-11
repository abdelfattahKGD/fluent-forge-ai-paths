
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const ProfileSection = () => {
  // Load user data from localStorage if available
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : {
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
  });
  
  // Animation states
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem('userData', JSON.stringify(user));
    
    // Trigger animations after component mounts
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [user]);
  
  const xpProgress = (user.xp / user.xpToNextLevel) * 100;
  const dailyProgress = (user.dailyGoal.completed / user.dailyGoal.total) * 100;

  // Function to update user data (for demo purposes)
  const completeActivity = () => {
    if (user.dailyGoal.completed < user.dailyGoal.total) {
      const updatedUser = {
        ...user,
        xp: user.xp + 50,
        dailyGoal: {
          ...user.dailyGoal,
          completed: user.dailyGoal.completed + 1
        }
      };
      setUser(updatedUser);
    }
  };

  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm border border-gray-200 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
        <div className={`transition-all duration-700 delay-200 transform ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">XP Progress</span>
            <span className="text-lingua-teal">{user.xp}/{user.xpToNextLevel}</span>
          </div>
          <Progress value={xpProgress} className="h-2" />
        </div>
        
        <div className={`transition-all duration-700 delay-300 transform ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">Daily Goal</span>
            <span className="text-lingua-orange">{user.dailyGoal.completed}/{user.dailyGoal.total} completed</span>
          </div>
          <Progress value={dailyProgress} className="h-2 bg-gray-100" />
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Button 
          variant="outline" 
          className="flex-1 text-gray-700 bg-gray-50 border border-gray-200 justify-between hover:bg-gray-100"
          onClick={() => {}}
        >
          <span>View Profile</span>
          <ChevronRight size={16} />
        </Button>
        
        <Button 
          className="flex-1 bg-lingua-teal hover:bg-lingua-teal/90"
          onClick={completeActivity}
          disabled={user.dailyGoal.completed >= user.dailyGoal.total}
        >
          <span>Complete Activity</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
