import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LessonCard from "./LessonCard";
import ProgressChart from "./ProgressChart";
import ProfileSection from "./ProfileSection";
import LanguageSelector from "./LanguageSelector";
import ImmersionCard from "./ImmersionCard";
import { Book, MessageCircle, Volume } from "lucide-react";
import { initializeLocalData } from "@/lib/storage-utils";

// Mock data
const recentLessons = [
  {
    id: 1,
    title: "Greetings & Introductions",
    description: "Learn to introduce yourself and greet others",
    level: "beginner" as const,
    progress: 100,
    estimatedTime: 15,
  },
  {
    id: 2,
    title: "Ordering in a Restaurant",
    description: "Practice food vocabulary and useful phrases",
    level: "beginner" as const,
    progress: 75,
    estimatedTime: 20,
  },
  {
    id: 3,
    title: "Past Tense Conjugation",
    description: "Master regular and irregular verbs in past tense",
    level: "intermediate" as const,
    progress: 30,
    estimatedTime: 25,
  },
];

const recommendedLessons = [
  {
    id: 4,
    title: "Travel Vocabulary",
    description: "Essential words and phrases for your next trip",
    level: "beginner" as const,
    progress: 0,
    estimatedTime: 15,
  },
  {
    id: 5,
    title: "Business Communication",
    description: "Formal expressions for professional settings",
    level: "intermediate" as const,
    progress: 0,
    estimatedTime: 30,
  },
  {
    id: 6,
    title: "Subjunctive Mood",
    description: "Express desires, doubts, and hypotheticals",
    level: "advanced" as const,
    progress: 0,
    estimatedTime: 35,
  },
];

const immersionExperiences = [
  {
    id: 1,
    title: "Café Conversation",
    description: "Order your favorite coffee and chat with the barista",
    level: "beginner" as const,
    duration: 5,
    category: "Real-life Scenario"
  },
  {
    id: 2,
    title: "Job Interview Simulation",
    description: "Practice answering common interview questions",
    level: "intermediate" as const,
    duration: 10,
    category: "Professional"
  },
  {
    id: 3,
    title: "Haggling at a Market",
    description: "Learn to negotiate prices like a local",
    level: "intermediate" as const,
    duration: 7,
    category: "Cultural Experience"
  }
];

const Dashboard = () => {
  useEffect(() => {
    // Initialize local storage data if not present
    initializeLocalData();
  }, []);

  return (
    <div className="container py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1 space-y-8">
          {/* Top section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in-up">
            <div>
              <h1 className="text-2xl font-bold mb-1">Welcome back!</h1>
              <p className="text-gray-600">Continue your language journey</p>
            </div>
            <LanguageSelector />
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center gap-4 animate-fade-in-left" style={{ animationDelay: "100ms" }}>
              <div className="bg-lingua-teal/10 p-3 rounded-full">
                <Book size={20} className="text-lingua-teal" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Lessons Completed</p>
                <p className="text-xl font-semibold">24</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center gap-4 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
              <div className="bg-lingua-purple/10 p-3 rounded-full">
                <Volume size={20} className="text-lingua-purple" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Vocabulary Mastered</p>
                <p className="text-xl font-semibold">186</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center gap-4 animate-fade-in-left" style={{ animationDelay: "300ms" }}>
              <div className="bg-lingua-orange/10 p-3 rounded-full">
                <MessageCircle size={20} className="text-lingua-orange" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Conversations</p>
                <p className="text-xl font-semibold">8</p>
              </div>
            </div>
          </div>
          
          {/* Lessons section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Tabs defaultValue="recent">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your Lessons</h2>
                <TabsList>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="recent" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentLessons.map((lesson, index) => (
                    <div key={lesson.id} className="animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                      <LessonCard {...lesson} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recommended" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedLessons.map((lesson, index) => (
                    <div key={lesson.id} className="animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                      <LessonCard {...lesson} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Immersion moments */}
          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Immersion Moments</h2>
              <Button variant="link" className="text-lingua-teal">See All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {immersionExperiences.map((experience, index) => (
                <div key={experience.id} className="animate-fade-in-up" style={{ animationDelay: `${700 + index * 100}ms` }}>
                  <ImmersionCard {...experience} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <ProfileSection />
          <ProgressChart />
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 animate-fade-in-right" style={{ animationDelay: "500ms" }}>
            <h3 className="font-semibold mb-3">Daily Challenge</h3>
            <p className="text-sm text-gray-600 mb-3">
              Complete a 5-minute pronunciation challenge to earn bonus XP!
            </p>
            <Button className="w-full bg-lingua-orange hover:bg-lingua-orange/90">
              Start Challenge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
