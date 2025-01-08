'use client';

import './_style.css';
import { Article } from '@/app/articles/lobby/page';
import Image from 'next/image';

export default ArticleContents;

function ArticleContents({ articles }: { articles: Article[] }) {
  const preview = require('../../../public/vercel.svg');

  return (
    <div className="article-container">
      {articles &&
        articles.map((value, index) => {
          return (
            <div className="article-element" key={index}>
              <Image
                className="preview-image"
                src={preview}
                alt="previewImage"
              />
              <div className="article-contents">
                <span>{value.title + (index + 1)}</span>
                <span>{value.content}</span>
                <span>{new Date(value.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}