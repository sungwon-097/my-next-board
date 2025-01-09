'use client';

import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';
import './_style.css';

export default MyPage;
function MyPage() {
  const router = useRouter();
  return (
    <div className="mypage-container">
      <div className="button-container">
        <button onClick={() => router.replace(PATH.SIGNIN)}>LOGIN</button>
        <button onClick={() => router.replace(PATH.SIGNUP)}>JOIN</button>
        <button onClick={() => router.replace(PATH.TEST)}>AUTH TEST</button>
      </div>
    </div>
  );
}