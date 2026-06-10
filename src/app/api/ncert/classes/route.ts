import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function GET() {
  const classes = await prisma.academicClass.findMany({
    orderBy: { level: 'asc' },
    select: {
      id: true,
      level: true,
    },
  });

  return NextResponse.json({ classes });
}
