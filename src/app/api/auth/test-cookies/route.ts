import { errorResponse, successResponse } from '@/lib/api-response';
import { cookies, headers } from 'next/headers';

export async function GET(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return errorResponse('Not found', 404);
  }

  const cookieStore = await cookies();
  const allHeaders = await headers();

  return successResponse(
    {
      receivedCookies: cookieStore.getAll(),
      receivedHeaders: Object.fromEntries(allHeaders.entries()),
      reqHeaders: Object.fromEntries(req.headers.entries()),
    },
    'Cookies inspected successfully'
  );
}
