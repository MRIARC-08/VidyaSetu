import { NcertController } from '@/modules/ncert/ncert.controller';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return await NcertController.getSubjects(req);
}
