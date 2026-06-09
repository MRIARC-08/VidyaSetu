import { NotesControllers } from '@/modules/notes/notes.controller';

export async function GET(request: Request) {
  return NotesControllers.list(request);
}