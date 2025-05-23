
import { useEffect, useState } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getLearningStats, getDefaultLearningStats, getUserData, getDefaultUserData } from "@/lib/storage-utils";

interface ProgressChartProps {
  className?: string;
}

const ProgressChart = ({ className }: ProgressChartProps) => {
  const [stats, setStats] = useState(getDefaultLearningStats());
  const [userData, setUserData] = useState(getDefaultUserData());
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Load stats from localStorage
    const storedStats = getLearningStats();
    if (storedStats) {
      setStats(storedStats);
    }
    
    // Load user data from localStorage
    const storedUserData = getUserData();
    if (storedUserData) {
      setUserData(storedUserData);
    }
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const streak = userData.streakDays || 0;
  const totalTimeThisWeek = stats.lastWeekActivity.reduce((acc, day) => acc + day.minutes, 0);
  const dailyAverage = Math.round(totalTimeThisWeek / 7);
  
  return (
    <Card className={cn("border border-gray-200 transition-all duration-700 transform", 
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10", 
      className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Weekly Progress</CardTitle>
          <div className="flex items-center space-x-1 bg-lingua-orange/10 px-2 py-1 rounded-full">
            <div className="w-4 h-4 text-lingua-orange animate-bounce-light">🔥</div>
            <span className="text-sm font-medium text-lingua-orange">{streak} day streak</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`h-[140px] transition-all duration-700 delay-200 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <ChartContainer 
            config={{
              minutes: {
                label: "Minutes",
                color: "#38B2AC",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.lastWeekActivity}>
                <XAxis dataKey="day" />
                <YAxis width={30} />
                <Tooltip 
                  formatter={(value) => [`${value} min`, "Time Spent"]} 
                  cursor={{ fill: "rgba(0,0,0,0.05)" }} 
                />
                <Bar 
                  dataKey="minutes" 
                  fill="#38B2AC" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className={`bg-gray-50 rounded-lg p-3 text-center transition-all duration-700 delay-300 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-sm text-gray-500">This week</p>
            <p className="text-2xl font-semibold text-lingua-teal">{totalTimeThisWeek} min</p>
          </div>
          <div className={`bg-gray-50 rounded-lg p-3 text-center transition-all duration-700 delay-400 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-sm text-gray-500">Daily average</p>
            <p className="text-2xl font-semibold text-lingua-teal">{dailyAverage} min</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
