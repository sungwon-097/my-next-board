'use client';

import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';
import './_style.css';

export default HomeButton;

function HomeButton() {
  const router = useRouter();
  return (
    <div
      className="floating-button"
      onClick={() => router.replace(PATH.ARTICLES_ALL)}
    >
      Home
    </div>
  );
}