import {NextRequest} from 'next/server';
import {authenticate} from '@/middleware/authenticate';
import {CommonResponse} from '@/app/api/dto/response';

/**
 * @brief 인증 절차를 확인할 테스트 API
 * @param req
 * @param userId
 */
async function Test({ req, userId }: { req: NextRequest; userId: number }) {
  try {
    // const userId = verify(req.headers.get('authorization') as string);
    return CommonResponse(200, { user: userId });
  } catch (e) {
    console.error(e);
    return CommonResponse(500, 'Internal Server Error');
  }
}

export const GET = authenticate(Test);
