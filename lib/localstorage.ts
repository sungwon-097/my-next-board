import { CommonResponse } from '@/app/api/dto/response';

type Credentials = {
  email: string;
  accessToken: string;
  refreshToken: string;
};

/**
 *
 * @param res
 */
export const setCredentials = (res: CommonResponse<Credentials>) => {
  const credentials = res.data;
  if (typeof window !== 'undefined') {
    localStorage.setItem('email', credentials.email);
    localStorage.setItem('access', credentials.accessToken);
    localStorage.setItem('refresh', credentials.refreshToken);
  }
};

/**
 * @brief 저장된 인증 정보 가져오기
 */
export const getCredentials = (): Credentials => {
  return {
    email: localStorage.getItem('email') ?? '',
    accessToken: localStorage.getItem('access') ?? '',
    refreshToken: localStorage.getItem('refresh') ?? '',
  };
};

/**
 * @brief 인증 정보 삭제, logout
 */
export const clearCredentials = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('email');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
};