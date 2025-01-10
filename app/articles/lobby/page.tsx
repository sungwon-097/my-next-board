'use server';

import ArticleContents from '@/components/contents/articles';
import { findAllArticles } from '@/app/api/articles/route';
import './_style.css';
import { Article } from '@/app/api/dto/models/models';

export default ArticlesLobby;

async function ArticlesLobby() {
  const articles: Article[] = await findAllArticles();

  return (
    <div className="lobby-container">
      <ArticleContents articles={articles} />
    </div>
  );
}
