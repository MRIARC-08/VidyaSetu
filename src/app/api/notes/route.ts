import { NotesControllers } from '@/modules/notes/notes.controller';

export async function GET() {
  return NotesControllers.list();
}
