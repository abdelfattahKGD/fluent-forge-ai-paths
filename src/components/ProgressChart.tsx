
import { AreaChart } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const data = [
  { day: "Mon", minutes: 12 },
  { day: "Tue", minutes: 18 },
  { day: "Wed", minutes: 15 },
  { day: "Thu", minutes: 25 },
  { day: "Fri", minutes: 20 },
  { day: "Sat", minutes: 30 },
  { day: "Sun", minutes: 22 },
];

const getStreak = () => {
  // In a real app, this would calculate the actual streak
  return 12;
};

interface ProgressChartProps {
  className?: string;
}

const ProgressChart = ({ className }: ProgressChartProps) => {
  const streak = getStreak();
  const totalTimeThisWeek = data.reduce((acc, day) => acc + day.minutes, 0);
  const dailyAverage = Math.round(totalTimeThisWeek / 7);
  
  return (
    <Card className={cn("border border-gray-200", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Weekly Progress</CardTitle>
          <div className="flex items-center space-x-1 bg-lingua-orange/10 px-2 py-1 rounded-full">
            <div className="w-4 h-4 text-lingua-orange">🔥</div>
            <span className="text-sm font-medium text-lingua-orange">{streak} day streak</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[140px]">
          <AreaChart
            data={data}
            categories={["minutes"]}
            index="day"
            colors={["#38B2AC"]}
            valueFormatter={(value) => `${value} min`}
            yAxisWidth={30}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-500">This week</p>
            <p className="text-2xl font-semibold text-lingua-teal">{totalTimeThisWeek} min</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-500">Daily average</p>
            <p className="text-2xl font-semibold text-lingua-teal">{dailyAverage} min</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
