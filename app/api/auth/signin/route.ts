import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { generateAccess, generateRefresh } from '@/lib/tokenProvider';
import { CommonResponse } from '@/app/api/dto/response';

const bcrypt = require('bcryptjs');

/**
 * @brief 로그인 API
 * @param req
 */
export async function POST(req: NextRequest) {
  console.log(req);

  const { email, password } = await req.json();

  if (!email || !password) {
    return CommonResponse(400, 'BadRequest');
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return CommonResponse(401, 'Invalid email');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return CommonResponse(401, 'Invalid password');
    }

    return CommonResponse(200, {
      email: email,
      accessToken: generateAccess(user.id),
      refreshToken: generateRefresh(user.id),
    });
  } catch (e) {
    console.error(e);
    return CommonResponse(500);
  }
}