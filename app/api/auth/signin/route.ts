import {NextRequest, NextResponse} from 'next/server';
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

    const result = {
      email: email,
      accessToken: generateAccess(user.id),
      refreshToken: generateRefresh(user.id),
    }

    const response = NextResponse.json({data: result}, {status: 200})
    response.cookies.set("access", result.accessToken, { httpOnly: true });
    response.cookies.set("refresh", result.refreshToken, { httpOnly: true });

    return response
  } catch (e) {
    console.error(e);
    return CommonResponse(500);
  }
}