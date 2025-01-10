import { NextRequest } from 'next/server';
import { middleware } from '@/middleware';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';

export const POST = middleware(registerCommentAPI);

async function registerCommentAPI({
  req,
  userId,
  params,
}: {
  req: NextRequest;
  userId: number;
  params: { id: number };
}) {
  const { content, postId } = await req.json();
  return CommonResponse(201, registerComment(postId, content, userId));
}

export async function registerComment(
  id: number,
  content: string,
  userId: number,
) {
  return await prisma.comment.create({
    data: {
      content: content,
      createdAt: new Date(),
      postId: id,
      userId: userId,
    },
  });
}