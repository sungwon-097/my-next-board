import jwt, { JwtPayload } from 'jsonwebtoken';

const accessSecret = process.env.ACCESS_SECRET as string;
const refreshSecret = process.env.REFRESH_SECRET as string;

/**
 * @brief accessToken 발급
 * @param id subject
 */
export const generateAccess = (id: number) => {
  return jwt.sign({ id: id }, accessSecret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
};

export const generateRefresh = (id: number) => {
  return jwt.sign({ id: id }, refreshSecret, {
    algorithm: 'HS256',
    expiresIn: '10h',
  });
};

/**
 * @brief 토큰 검증
 * @param token 검증 할 토큰 정보
 */
export const verify = (token: string) => {
  try {
    const decoded = jwt.verify(token, accessSecret) as JwtPayload;
    return decoded.id;
  } catch (e) {
    throw new Error('Fail to verification');
  }
};