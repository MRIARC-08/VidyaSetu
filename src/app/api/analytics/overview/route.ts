import AnalyticsController from '@/modules/analytics/analytics.controller';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // TODO: Implement analytics overview
  console.log('runingg------route,');
  return AnalyticsController.getAnalytics(req);
}
