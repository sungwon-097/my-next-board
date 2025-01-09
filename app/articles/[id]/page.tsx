'use server';

import { findArticleById } from '@/app/api/articles/[id]/route';
import React from 'react';
import './_style.css';
import CommentSection from '@/components/contents/comments';

export default RetrieveSingleArticle;
async function RetrieveSingleArticle({ params }: { params: { id: number } }) {
  const { id } = await params;
  const article = await findArticleById(Number(id));

  return (
    <div className="single-article-container">
      <div className="content-container">
        <div className="content-element">
          <span>Title</span>
          <span>{article?.title}</span>
        </div>
        <div className="content-element">
          <span>Author</span>
          <span>{article?.user.name}</span>
        </div>
        <div className="content-element">
          <span>Content</span>
          <span className="content-box">{article?.content}</span>
        </div>
        <div className="content-element">
          {article?.content && (
            <CommentSection
              articleId={article.id}
              comments={article.comments}
            />
          )}
        </div>
      </div>
    </div>
  );
}