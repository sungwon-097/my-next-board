import './_style.css';
import { Article } from '@/app/api/dto/models/models';
import ArticleContents from '@/components/contents/articles';
import { findAllArticlesByUser } from '@/app/api/articles/users/route';

export default MyPost;
async function MyPost() {
  const articles: Article[] = await findAllArticlesByUser();
  return (
    <div className="posts-container">
      <ArticleContents articles={articles} />
    </div>
  );
}