import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { CommonResponse } from '@/app/api/dto/response';

const bcrypt = require('bcryptjs');

/**
 * @brief 가입 API
 * @param req
 */
export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return CommonResponse(400, 'BadRequest');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return CommonResponse(201, user.email + ' created');
  } catch (e) {
    console.error(e);
    return CommonResponse(500, 'Internal Server Error');
  }
}