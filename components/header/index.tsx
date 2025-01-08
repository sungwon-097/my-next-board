'use client';
import './_style.css';
import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';

export function Header() {
  const router = useRouter();

  return (
    <div className="header-container">
      <p onClick={() => router.replace(PATH.ARTICLES_ALL)}>All</p>
      <p onClick={() => router.replace(PATH.ARTICLES_NEW)}>New Post</p>
      <p onClick={() => router.replace(PATH.ARTICLES_ALERT)}>Alert</p>
      <p onClick={() => router.replace(PATH.ARTICLES_MY)}>MyPage</p>
    </div>
  );
}