import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';
import { Article } from '@/app/api/dto/models/models';
import { cookies } from 'next/headers';
import {getAuth, verify} from '@/lib/tokenProvider';

export const GET = GetArticle;

async function GetArticle({
  req,
  userId,
}: {
  req: NextRequest;
  userId: number;
}) {
  const articles = findAllArticlesByUser();

  return CommonResponse(200, articles);
}

export async function findAllArticlesByUser(): Promise<Article[]> {
  const cookieStore = await cookies();
  const userId = getAuth(cookieStore.get('access')?.value ?? '');
  return await prisma.post.findMany({
    where: {
      user: {
        id: userId,
      },
    },
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