export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  totalActiveDays: number;
  lastActivityDate: string | null;
  todayActive: boolean;
  calendar: ActivityDay[];
}

export interface ActivityDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export class WeakTopicAnalyticsError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'WeakTopicAnalyticsError';
    this.statusCode = statusCode;
  }
}

export interface WeakTopicResult {
  topicName: string;
  topicId: string;
  accuracy: number;
  attempts: number;
  correctAnswers: number;
}

export interface WeakTopicsResponse {
  topics: WeakTopicResult[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface DailyActivityDay {
  day: string;
  date: string;
  active: boolean;
}

export interface UserStats {
  totalAttempts: number;
  accuracy: number;
  currentStreak: number;
  longestStreak: number;
  lastActivity: string | null;
  dailyActivity: DailyActivityDay[];
}

export interface AnalyticsOverviewRequest {
  userId: string;
}

export interface AnalyticsOverviewResponse {
  success: boolean;
  data?: UserStats;
  message?: string;
}

export interface WeakTopicsRequest {
  userId: string;
  limit?: number;
  page?: number;
  from?: string;
  to?: string;
  sortBy?: 'accuracy' | 'attempts';
}

export interface TopicPerformance extends WeakTopicResult {
  isWeak: boolean;
}

export interface StreakDataResponse {
  success: boolean;
  data?: StreakData;
  message?: string;
}
