export class ApiError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
    this.name = 'ApiError';
  }
}
