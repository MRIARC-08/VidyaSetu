import { NotesControllers } from '@/modules/notes/notes.controller';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ noteId: string }> }
) {
  const { noteId } = await params;
  return NotesControllers.getById(request, noteId);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ noteId: string }> }
) {
  const { noteId } = await params;
  return NotesControllers.delete(request, noteId);
}