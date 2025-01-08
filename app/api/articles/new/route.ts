import { NextRequest } from 'next/server';
import { authenticate } from '@/middleware/authenticate';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';

export const POST = authenticate(CreateArticle);

async function CreateArticle({
  req,
  userId,
}: {
  req: NextRequest;
  userId: number;
}) {
  const { title, content } = await req.json();

  const article = await prisma.post.create({
    data: {
      title: title,
      content: content,
      createdAt: new Date(),
      userId: userId,
    },
  });

  return CommonResponse(201, article);
}