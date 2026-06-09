// TODO: Define custom error classes
export {};
export class NotesApiError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'NotesApiError';
  }
}
