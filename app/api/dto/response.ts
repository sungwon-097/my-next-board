import {NextResponse} from 'next/server';
import {string} from 'postcss-selector-parser';

/**
 * @brief Common Response.
 */
export function CommonResponse(status: number, data?: any) {
  return NextResponse.json(
    {
      data: typeof data === 'string' ? { message: data ?? 'no content' } : data,
    },
    { status: status },
  );
}

export type CommonResponse<T> = {
  data: T;
};
