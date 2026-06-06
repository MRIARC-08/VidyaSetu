import { NextResponse } from 'next/server';

export type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
  details?: unknown;
};

export function successResponse<T>(
  data: T,
  message = 'Success',
  statusCode = 200
): NextResponse<ApiSuccessResponse<T>> {
  return NextResponse.json(
    { success: true, message, data },
    { status: statusCode }
  );
}

export function errorResponse(
  message = 'Something went wrong',
  statusCode = 500,
  details?: unknown
): NextResponse<ApiErrorResponse> {
  return NextResponse.json(
    {
      success: false,
      message,
      ...(details !== undefined ? { details } : {}),
    },
    { status: statusCode }
  );
}
