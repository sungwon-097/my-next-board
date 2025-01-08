import { NextRequest } from 'next/server';
import { authenticate } from '@/middleware/authenticate';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';

export const GET = authenticate(GetArticle);

async function GetArticle({
  req,
  userId,
}: {
  req: NextRequest;
  userId: number;
}) {
  const articles = await prisma.post.findMany();

  return CommonResponse(200, articles);
}