import jwt, { JwtPayload } from 'jsonwebtoken';
import {jwtVerify} from "jose";

const accessSecret = process.env.ACCESS_SECRET as string;
const refreshSecret = process.env.REFRESH_SECRET as string;

/**
 * @brief accessToken 발급
 * @param id subject
 */
export const generateAccess = (id: number) => {
  return jwt.sign({ id: id }, accessSecret, {
    algorithm: 'HS256',
    expiresIn: '9h',
  });
};

export const generateRefresh = (id: number) => {
  return jwt.sign({ id: id }, refreshSecret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
};

/**
 * @brief 토큰 검증
 * @param token 검증 할 토큰 정보
 */
export const verify = (token: string) => {
  try {
    const secretKey = new TextEncoder().encode(accessSecret)
    jwtVerify(token, secretKey)
  } catch (e) {
    throw new Error('Fail to verification');
  }
};

export const getAuth = (token:string) => {
  try {
    const decoded = jwt.verify(token, accessSecret) as JwtPayload
    return decoded.id
  } catch (e) {
    throw new Error('Fail to verification');
  }
}