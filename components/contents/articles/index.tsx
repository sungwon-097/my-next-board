'use client';

import './_style.css';
import { Article } from '@/app/articles/lobby/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PATH } from '@/lib/path';

export default ArticleContents;

function ArticleContents({ articles }: { articles: Article[] }) {
  const router = useRouter();
  const preview = require('../../../public/vercel.svg');

  const handleClickContent = (id: number) => {
    router.replace(PATH.ARTICLES + '/' + id);
  };

  return (
    <div className="article-container">
      {articles.length > 0 &&
        articles.map((value, index) => {
          return (
            <div
              className="article-element"
              key={index}
              onClick={() => handleClickContent(value.id)}
            >
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