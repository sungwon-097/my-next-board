import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';
import { Article } from '@/app/api/dto/models/models';

export const GET = GetArticle;

async function GetArticle({
  req,
  userId,
}: {
  req: NextRequest;
  userId: number;
}) {
  const articles = findAllArticles();

  return CommonResponse(200, articles);
}

export async function findAllArticles(): Promise<Article[]> {
  return await prisma.post.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}