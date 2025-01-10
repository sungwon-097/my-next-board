'use client';

import React, { useState } from 'react';
import { clearCredentials, getCredentials } from '@/lib/localstorage';
import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';
import './_style.css';

export default Test;

function Test() {
  const router = useRouter();
  const [result, setResult] = useState<boolean | null>(null);

  const handleAuthCheck = async () => {
    await fetch(PATH.API_TEST, {
      method: 'GET',
    }).then((res) => {
      setResult(res.ok);
    });
  };

  const handleLogout = async () => {
    await fetch(PATH.API_SIGNOUT, {
      method: 'POST',
    }).then((res) => {
      setResult(res.ok);
    });
  }

  const contextResult = () => {
    if (result == null) return 'Click Button';
    return 'Authentication ' + (result ? 'SUCCESS' : 'FAIL');
  };

  return (
    <div className="test-container">
      <button onClick={handleAuthCheck}>{contextResult()}</button>
      <button onClick={handleLogout}>logout</button>
      <button onClick={() => router.replace(PATH.ARTICLES_ALL)}>
        move to contents
      </button>
    </div>
  );
}