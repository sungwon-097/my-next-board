import { NextRequest } from 'next/server';
import { CommonResponse } from '@/app/api/dto/response';

export async function POST(req: NextRequest) {
  const response = CommonResponse(200);
  response.cookies.delete('access');
  response.cookies.delete('refresh');
  return response
}