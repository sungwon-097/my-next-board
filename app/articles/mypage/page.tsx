'use client';

import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';
import './_style.css';
import HomeButton from '@/components/homeButton';

export default MyPage;

function MyPage() {
  const router = useRouter();
  return (
    <div className="mypage-container">
      <Header />
      <div className="button-container">
        <button onClick={() => router.replace(PATH.SIGNIN)}>LOGIN</button>
        <button onClick={() => router.replace(PATH.SIGNUP)}>JOIN</button>
        <button onClick={() => router.replace(PATH.TEST)}>AUTH TEST</button>
      </div>
      <HomeButton />
    </div>
  );
}