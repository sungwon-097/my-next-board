'use server';

import { Header } from '@/components/header';
import { findArticleById } from '@/app/api/articles/[id]/route';
import React from 'react';
import './_style.css';
import HomeButton from '@/components/homeButton';

export default RetrieveSingleArticle;

async function RetrieveSingleArticle({ params }: { params: { id: number } }) {
  const { id } = await params;
  const article = await findArticleById(Number(id));
  // console.log(article);

  return (
    <div className="single-article-container">
      <Header />
      <div className="content-container">
        <div className="content-element">
          <span>Title</span>
          <span>{article?.title}</span>
        </div>
        <div className="content-element">
          <span>Tag</span>
          <span>tags...</span>
        </div>
        <div className="content-element">
          <span>Content</span>
          <span className="content-box">{article?.content}</span>
        </div>
      </div>
      <HomeButton />
    </div>
  );
}