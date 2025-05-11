
// User data type definition
export interface UserData {
  name: string;
  profilePic: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  dailyGoal: {
    completed: number;
    total: number;
  };
  lastLogin?: string;
  streakDays?: number;
}

// Learning stats type definition
export interface LearningStats {
  totalLessonsCompleted: number;
  totalTimeSpentMinutes: number;
  vocabularyMastered: number;
  conversationsCompleted: number;
  lastWeekActivity: { day: string; minutes: number }[];
}

// Save user data to localStorage
export const saveUserData = (data: UserData): void => {
  localStorage.setItem('userData', JSON.stringify(data));
};

// Get user data from localStorage
export const getUserData = (): UserData | null => {
  const data = localStorage.getItem('userData');
  return data ? JSON.parse(data) : null;
};

// Save learning stats to localStorage
export const saveLearningStats = (stats: LearningStats): void => {
  localStorage.setItem('learningStats', JSON.stringify(stats));
};

// Get learning stats from localStorage
export const getLearningStats = (): LearningStats | null => {
  const stats = localStorage.getItem('learningStats');
  return stats ? JSON.parse(stats) : null;
};

// Update user XP and check level up
export const updateUserXP = (additionalXP: number): UserData => {
  const userData = getUserData() || getDefaultUserData();
  
  userData.xp += additionalXP;
  
  // Check for level up
  if (userData.xp >= userData.xpToNextLevel) {
    userData.level += 1;
    userData.xp = userData.xp - userData.xpToNextLevel;
    userData.xpToNextLevel = Math.round(userData.xpToNextLevel * 1.5); // Increase XP needed for next level
  }
  
  saveUserData(userData);
  return userData;
};

// Update daily goal progress
export const updateDailyGoal = (): UserData => {
  const userData = getUserData() || getDefaultUserData();
  
  if (userData.dailyGoal.completed < userData.dailyGoal.total) {
    userData.dailyGoal.completed += 1;
    saveUserData(userData);
  }
  
  return userData;
};

// Get default user data
export const getDefaultUserData = (): UserData => {
  return {
    name: "Alex Johnson",
    profilePic: "",
    level: 1,
    xp: 0,
    xpToNextLevel: 500,
    dailyGoal: {
      completed: 0,
      total: 3
    },
    lastLogin: new Date().toISOString(),
    streakDays: 1
  };
};

// Get default learning stats
export const getDefaultLearningStats = (): LearningStats => {
  return {
    totalLessonsCompleted: 0,
    totalTimeSpentMinutes: 0,
    vocabularyMastered: 0,
    conversationsCompleted: 0,
    lastWeekActivity: [
      { day: "Mon", minutes: 0 },
      { day: "Tue", minutes: 0 },
      { day: "Wed", minutes: 0 },
      { day: "Thu", minutes: 0 },
      { day: "Fri", minutes: 0 },
      { day: "Sat", minutes: 0 },
      { day: "Sun", minutes: 0 },
    ]
  };
};

// Initialize data if not present
export const initializeLocalData = (): void => {
  if (!getUserData()) {
    saveUserData(getDefaultUserData());
  }
  
  if (!getLearningStats()) {
    saveLearningStats(getDefaultLearningStats());
  }
};
