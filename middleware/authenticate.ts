import { NextRequest } from 'next/server';
import { CommonResponse } from '@/app/api/dto/response';
import { verify } from '@/lib/tokenProvider';

export const authenticate = <T>(
  handler: (args: T & { req: NextRequest; userId: number }) => Promise<any>,
) => {
  return async (req: NextRequest, context: T) => {
    const token = req.headers.get('authorization');

    if (!token) {
      return CommonResponse(401, 'Login Required');
    }
    try {
      const userId = verify(token);
      return handler({ ...context, req, userId });
    } catch (e) {
      return CommonResponse(401, 'Invalid token');
    }
  };
};