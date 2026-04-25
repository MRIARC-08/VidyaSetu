import AnalyticsRepository from './analytics.repository';

// TODO: Implement analytics service
export default class AnalyticsService {
  static async analytics(userId: string) {
    return await AnalyticsRepository.getQuizSesssions(userId);
  }
}
