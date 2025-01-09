'use client';

import ArticleContents from '@/components/contents/articles';
import './_style.css';
import { PATH } from '@/lib/path';
import { getCredentials } from '@/lib/localstorage';
import { useEffect, useState } from 'react';
import { CommonResponse } from '@/app/api/dto/response';
import { Article } from '@/app/api/dto/models/models';

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
      <ArticleContents articles={articles} />
    </div>
  );
}