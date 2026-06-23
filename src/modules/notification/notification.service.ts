import { NotificationRepository } from './notification.repository';
import type { NotificationFilters, CreateNotificationInput } from './notification.types';

export class NotificationService {
  static async getNotifications(filters: NotificationFilters) {
    const result = await NotificationRepository.findByUser(filters);
    return {
      notifications: result.notifications,
      unreadCount: result.unreadCount,
      total: result.total,
    };
  }

  static async getUnreadCount(userId: string) {
    return NotificationRepository.getUnreadCount(userId);
  }

  static async createNotification(input: CreateNotificationInput) {
    return NotificationRepository.create(input);
  }

  static async markAsRead(id: string, userId: string) {
    const notification = await NotificationRepository.findById(id);
    
    if (!notification) {
      throw new Error('Notification not found');
    }

    if (notification.userId !== userId) {
      throw new Error('Unauthorized to mark this notification as read');
    }

    return NotificationRepository.markAsRead(id, userId);
  }

  static async markAllAsRead(userId: string) {
    return NotificationRepository.markAllAsRead(userId);
  }

  static async deleteNotification(id: string, userId: string) {
    return NotificationRepository.delete(id, userId);
  }

  static async deleteAllRead(userId: string) {
    return NotificationRepository.deleteAllRead(userId);
  }

  // Helper methods for creating specific notification types
  static async createQuizReminder(userId: string, quizTitle: string, dueDate?: Date) {
    const message = dueDate
      ? `Your quiz "${quizTitle}" is due on ${dueDate.toLocaleDateString()}. Don't forget to complete it!`
      : `Time to practice! Take a quiz on "${quizTitle}" to strengthen your understanding.`;

    return this.createNotification({
      userId,
      type: 'QUIZ_REMINDER',
      title: 'Quiz Reminder',
      message,
      data: { quizTitle, dueDate },
    });
  }

  static async createGoalCompletion(userId: string, goalTitle: string, achievement: string) {
    return this.createNotification({
      userId,
      type: 'GOAL_COMPLETION',
      title: 'Goal Achieved! 🎉',
      message: `Congratulations! You've completed your goal: "${goalTitle}". ${achievement}`,
      data: { goalTitle, achievement },
    });
  }

  static async createStreakAlert(userId: string, currentStreak: number) {
    const streakMessages: Record<number, string> = {
      7: "A whole week! Your dedication is inspiring.",
      14: "Two weeks strong! You're building excellent habits.",
      30: "A month of consistent learning! You're unstoppable.",
      60: "Two months! You've mastered the art of consistency.",
      100: "100 days! You're a learning champion!",
    };

    const message = streakMessages[currentStreak] || `Keep it up! You're on a ${currentStreak}-day streak!`;

    return this.createNotification({
      userId,
      type: 'STUDY_STREAK',
      title: 'Study Streak Milestone',
      message,
      data: { streak: currentStreak },
    });
  }

  static async createRevisionRecommendation(userId: string, topic: string, reason: string) {
    return this.createNotification({
      userId,
      type: 'REVISION_RECOMMENDATION',
      title: 'Time to Review',
      message: `We noticed you might benefit from reviewing "${topic}". ${reason}`,
      data: { topic, reason },
    });
  }

  static async createPerformanceInsight(userId: string, insight: string, improvement: string) {
    return this.createNotification({
      userId,
      type: 'PERFORMANCE_INSIGHT',
      title: 'Performance Insight',
      message: `${insight}. Here's a tip: ${improvement}`,
    });
  }

  static async createWeeklyProgress(userId: string, hoursStudied: number, accuracy: number) {
    return this.createNotification({
      userId,
      type: 'WEEKLY_PROGRESS',
      title: 'Weekly Progress Report',
      message: `This week: ${hoursStudied} hours of study time with ${accuracy}% accuracy. Keep up the great work!`,
      data: { hoursStudied, accuracy },
    });
  }

  static async createSyllabusMilestone(userId: string, chapterName: string, progress: number) {
    return this.createNotification({
      userId,
      type: 'SYLLABUS_MILESTONE',
      title: 'Chapter Complete! 📚',
      message: `You've completed ${progress}% of "${chapterName}". Keep pushing forward!`,
      data: { chapterName, progress },
    });
  }

  static async createQuizCompletion(userId: string, quizTitle: string, score: number, accuracy: number) {
    const emoji = accuracy >= 80 ? '🌟' : accuracy >= 60 ? '👍' : '💪';
    return this.createNotification({
      userId,
      type: 'QUIZ_COMPLETION',
      title: `Quiz Complete ${emoji}`,
      message: `You scored ${score}/${accuracy}% on "${quizTitle}". ${accuracy >= 80 ? 'Excellent work!' : 'Keep practicing!'}`,
      data: { quizTitle, score, accuracy },
    });
  }

  static async createDailyStudyReminder(userId: string, suggestedTopic?: string) {
    const message = suggestedTopic
      ? `Start your day strong! We suggest studying "${suggestedTopic}" today.`
      : "Good morning! A new day of learning awaits. Let's build your streak!";

    return this.createNotification({
      userId,
      type: 'DAILY_STUDY_REMINDER',
      title: 'Daily Study Reminder',
      message,
      data: { suggestedTopic },
    });
  }
}
