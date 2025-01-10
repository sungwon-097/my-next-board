import {NextRequest} from 'next/server';
import {CommonResponse} from '@/app/api/dto/response';

/**
 * @brief 인증 절차를 확인할 테스트 API
 * @param req
 * @param userId
 */
async function Test({ req, userId }: { req: NextRequest; userId: number }) {
  try {
    return CommonResponse(200, { user: userId });
  } catch (e) {
    console.error(e);
    return CommonResponse(500, 'Internal Server Error');
  }
}

export const GET = Test;
