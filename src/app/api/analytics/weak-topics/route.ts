import { AnalyticsController } from '@/modules/analytics/analytics.controller';

export async function GET(req: Request) {
  return AnalyticsController.getWeakTopics(req);
}
