import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';

export const GET = GetArticle;

async function GetArticle({
  req,
  userId,
  params,
}: {
  req: NextRequest;
  userId: number;
  params: { id: number };
}) {
  const { id } = params;

  return CommonResponse(200, findArticleById(id));
}

export function findArticleById(id: number) {
  return prisma.post.findUnique({
    where: { id },
    include: {
      comments: {
        include: {
          user: true,
        },
      },
      user: true,
    },
  });
}