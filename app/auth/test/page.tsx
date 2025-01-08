'use client';

import React, { useState } from 'react';
import '../_style.css';
import { clearCredentials, getCredentials } from '@/lib/localstorage';
import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';
import HomeButton from '@/components/homeButton';

export default Test;

function Test() {
  const router = useRouter();
  const [result, setResult] = useState<boolean | null>(null);

  const handler = async () => {
    await fetch(PATH.API_TEST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCredentials().accessToken.toString(),
      },
    }).then((res) => {
      setResult(res.ok);
    });
  };

  const contextResult = () => {
    if (result == null) return 'Click Button';
    return 'Authentication ' + (result ? 'SUCCESS' : 'FAIL');
  };

  return (
    <div>
      <div onClick={handler}>{contextResult()}</div>
      <button onClick={clearCredentials}>logout</button>
      <button onClick={() => router.replace(PATH.ARTICLES_ALL)}>
        move to contents
      </button>
      <HomeButton />
    </div>
  );
}