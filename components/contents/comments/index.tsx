'use client';
import React, { useState } from 'react';
import { PATH } from '@/lib/path';
import { getCredentials } from '@/lib/localstorage';
import { Comment } from '@/app/api/dto/models/models';
import { useRouter } from 'next/navigation';
import './_style.css';

export default function CommentSection({
  comments,
  articleId,
}: {
  comments: Comment[];
  articleId: number;
}) {
  const router = useRouter();
  const [comment, setComment] = useState('');
  const handleRegisterButton = () => {
    fetch(PATH.API_COMMENTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCredentials().accessToken.toString(),
      },
      body: JSON.stringify({
        content: comment,
        postId: articleId,
      }),
    }).then((res) => {
      if (res.ok) {
        router.refresh();
      } else alert(res);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const toDateTime = (date: Date) => {
    return (
      date.toTimeString().substring(0, 8) +
      '/' +
      date.toLocaleDateString().substring(0, 8)
    );
  };

  return (
    <div className="comment-container">
      <input
        type="text"
        placeholder="register your comment"
        onChange={handleChange}
      ></input>
      <button onClick={handleRegisterButton}>Register</button>
      {comments &&
        comments.map((value, index) => {
          return (
            <div className="user-comment-element" key={index}>
              <div>{value.content}</div>
              <div>author: {value.user.name}</div>
              <div>{toDateTime(new Date(value.createdAt))}</div>
            </div>
          );
        })}
    </div>
  );
}