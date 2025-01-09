'use client';

import React, { useState } from 'react';
import { PATH } from '@/lib/path';
import { getCredentials } from '@/lib/localstorage';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import './_style.css';
import HomeButton from '@/components/homeButton';

export default NewPost;

function NewPost() {
  const [form, setForm] = useState({ title: '', tag: '', content: '' });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(PATH.API_ARTICLES_NEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCredentials().accessToken.toString(),
        },
        body: JSON.stringify(form),
      });
      return router.replace(PATH.ARTICLES_ALL);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <div className="create-container">
      <Header />
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>New Post</h1>
        <div className="create-element">
          <span>Title</span>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="create-element">
          <span>Content</span>
          <input
            type="text"
            name="content"
            placeholder="Content"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={() => {}}>
          Submit
        </button>
      </form>
      <HomeButton />
    </div>
  );
}