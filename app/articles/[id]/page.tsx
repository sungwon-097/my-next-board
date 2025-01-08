'use server';

import { Header } from '@/components/header';
import { findArticleById } from '@/app/api/articles/[id]/route';

export default RetrieveSingleArticle;
async function RetrieveSingleArticle({ params }: { params: { id: string } }) {
  const { id } = params;
  const article = await findArticleById(Number(id));
  console.log(article);
  return (
    <div>
      <Header />
    </div>
  );
}