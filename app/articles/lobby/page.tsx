'use client';

import { Header } from '@/components/header';
import ArticleContents from '@/components/contents/articles';
import './_style.css';
import { PATH } from '@/lib/path';
import { getCredentials } from '@/lib/localstorage';
import { useEffect, useState } from 'react';
import { CommonResponse } from '@/app/api/dto/response';

export default ArticlesLobby;

function ArticlesLobby() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<CommonResponse<Article[]>> => {
      const res = await fetch(PATH.API_ARTICLES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCredentials().accessToken.toString(),
        },
      });
      return res.json();
    };

    fetchData().then((r) => setArticles(r.data));
  }, []);

  return (
    <div className="lobby-container">
      <Header />
      <ArticleContents articles={articles} />
    </div>
  );
}

export type Article = {
  title: string;
  content: string;
  createdAt: Date;
  preview: string;
};