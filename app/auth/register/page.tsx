'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../_style.css';
import { PATH } from '@/lib/path';
import HomeButton from '@/components/homeButton';

export default Register;

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(PATH.API_SIGNUP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
          const error = await res.json();
          alert(error.data.message);
          return
      }

      return router.push(PATH.SIGNIN);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="title">Register Page</div>
      <span>Name</span>
      <input
        type="text"
        name="name"
        placeholder="Please enter your name"
        value={form.name}
        onChange={handleChange}
      />
      <span>Email</span>
      <input
        type="email"
        name="email"
        placeholder="Please enter your email"
        value={form.email}
        onChange={handleChange}
      />
      <span>Password</span>
      <input
        type="password"
        name="password"
        placeholder="Please enter your password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
      <HomeButton />
    </form>
  );
}