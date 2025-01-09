'use client';

import React, { useState } from 'react';
import '../_style.css';
import { setCredentials } from '@/lib/localstorage';
import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';

export default Login;

function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(PATH.API_SIGNIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.data.message);
        return;
      }

      setCredentials(await res.json());
      return router.replace(PATH.TEST);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="title">Login Page</div>
      <span>Email</span>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <span>Password</span>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}