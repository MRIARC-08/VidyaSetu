import { NextResponse } from 'next/server';

export class ApiResponse {
  static success<T>(data: T, message = 'Success', status = 200) {
    return NextResponse.json({ success: true, message, data }, { status });
  }

  static error(message = 'Error', status = 500, details?: unknown) {
    return NextResponse.json(
      { success: false, message, ...(details !== undefined && { details }) },
      { status }
    );
  }

  static unauthorized(message = 'Unauthorized') {
    return this.error(message, 401);
  }

  static forbidden(message = 'Forbidden') {
    return this.error(message, 403);
  }

  static notFound(message = 'Not Found') {
    return this.error(message, 404);
  }

  static badRequest(message = 'Bad Request', details?: unknown) {
    return this.error(message, 400, details);
  }
}
